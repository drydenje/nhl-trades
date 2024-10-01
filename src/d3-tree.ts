'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

interface TreeNode {
  name: string
  children?: TreeNode[]
}

export default function Component() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [data, setData] = useState<TreeNode>({
    name: "Root",
    children: [
      {
        name: "Branch 1",
        children: [
          { name: "Leaf 1.1" },
          { name: "Leaf 1.2" }
        ]
      },
      {
        name: "Branch 2",
        children: [
          { name: "Leaf 2.1" },
          {
            name: "Sub-branch 2.2",
            children: [
              { name: "Leaf 2.2.1" },
              { name: "Leaf 2.2.2" }
            ]
          }
        ]
      }
    ]
  })

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    const width = 800
    const height = 600
    const margin = { top: 40, right: 30, bottom: 50, left: 30 }

    svg.attr('width', width).attr('height', height)

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const tree = d3.tree<TreeNode>().size([width - margin.left - margin.right, height - margin.top - margin.bottom])

    const root = d3.hierarchy(data)
    tree(root)

    const link = g.selectAll('.link')
      .data(root.descendants().slice(1))
      .enter().append('path')
      .attr('class', 'link')
      .attr('d', d => `
        M${d.x},${d.y}
        C${d.x},${(d.y + d.parent!.y) / 2}
         ${d.parent!.x},${(d.y + d.parent!.y) / 2}
         ${d.parent!.x},${d.parent!.y}
      `)
      .attr('fill', 'none')
      .attr('stroke', '#555')
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 1.5)

    const node = g.selectAll('.node')
      .data(root.descendants())
      .enter().append('g')
      .attr('class', d => 'node' + (d.children ? ' node--internal' : ' node--leaf'))
      .attr('transform', d => `translate(${d.x},${d.y})`)

    node.append('circle')
      .attr('r', 10)
      .attr('fill', d => d.children ? '#555' : '#999')
      .attr('stroke-width', 1.5)
      .attr('stroke', '#fff')

    node.append('text')
      .attr('dy', '.35em')
      .attr('y', d => d.children ? -20 : 20)
      .attr('text-anchor', 'middle')
      .text(d => d.data.name)
      .attr('fill', '#333')
      .attr('font-size', '12px')

    // Add click event to nodes
    node.on('click', (event, d) => {
      // Toggle children
      if (d.children) {
        d._children = d.children
        d.children = null
      } else {
        d.children = d._children
        d._children = null
      }
      update(d)
    })

    function update(source: d3.HierarchyNode<TreeNode>) {
      const duration = 750

      const newRoot = d3.hierarchy(data)
      tree(newRoot)

      const nodes = newRoot.descendants()
      const links = newRoot.descendants().slice(1)

      nodes.forEach(d => {
        d.y = d.depth * 100
      })

      const node = svg.selectAll('.node')
        .data(nodes, d => (d as any).id || ((d as any).id = ++i))

      const nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr('transform', d => `translate(${source.x0},${source.y0})`)
        .on('click', (event, d) => {
          click(d)
          update(d)
        })

      nodeEnter.append('circle')
        .attr('r', 1e-6)
        .style('fill', d => d._children ? 'lightsteelblue' : '#fff')

      nodeEnter.append('text')
        .attr('dy', '.35em')
        .attr('y', d => d.children || d._children ? -20 : 20)
        .attr('text-anchor', 'middle')
        .text(d => d.data.name)

      const nodeUpdate = nodeEnter.merge(node as any)

      nodeUpdate.transition()
        .duration(duration)
        .attr('transform', d => `translate(${d.x},${d.y})`)

      nodeUpdate.select('circle')
        .attr('r', 10)
        .style('fill', d => d._children ? 'lightsteelblue' : '#fff')
        .attr('cursor', 'pointer')

      const nodeExit = node.exit().transition()
        .duration(duration)
        .attr('transform', d => `translate(${source.x},${source.y})`)
        .remove()

      nodeExit.select('circle')
        .attr('r', 1e-6)

      nodeExit.select('text')
        .style('fill-opacity', 1e-6)

      const link = svg.selectAll('.link')
        .data(links, d => (d as any).id)

      const linkEnter = link.enter().insert('path', 'g')
        .attr('class', 'link')
        .attr('d', d => {
          const o = { x: source.x0, y: source.y0 }
          return diagonal(o, o)
        })

      const linkUpdate = linkEnter.merge(link as any)

      linkUpdate.transition()
        .duration(duration)
        .attr('d', d => diagonal(d, d.parent))

      link.exit().transition()
        .duration(duration)
        .attr('d', d => {
          const o = { x: source.x, y: source.y }
          return diagonal(o, o)
        })
        .remove()

      nodes.forEach(d => {
        d.x0 = d.x
        d.y0 = d.y
      })
    }

    function diagonal(s: any, d: any) {
      return `M ${s.x} ${s.y}
              C ${s.x} ${(s.y + d.y) / 2},
                ${d.x} ${(s.y + d.y) / 2},
                ${d.x} ${d.y}`
    }

    function click(d: d3.HierarchyNode<TreeNode>) {
      if (d.children) {
        d._children = d.children
        d.children = null
      } else {
        d.children = d._children
        d._children = null
      }
    }

    let i = 0
  }, [data])

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <svg ref={svgRef} className="bg-white shadow-lg rounded-lg" aria-label="Vertical tree diagram"></svg>
    </div>
  )
}