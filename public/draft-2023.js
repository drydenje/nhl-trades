const page = `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>2023 NHL Entry Draft Picks at hockeydb.com</title>
<meta charset="UTF-8"><meta name="description" content="A sortable list of players drafted in the 2023 NHL Entry draft, including their career scoring after being drafted" />
<meta name = "format-detection" content = "telephone=no" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="StyleSheet" href="/styles/standard.css" type="text/css" media="screen" />
<link rel="StyleSheet" href="/styles/standard-print.css" type="text/css" media="print" />

<script defer src="/js/all.js"></script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CQ8JMTPP28"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CQ8JMTPP28');
</script>
<script async='async' src='//storage.googleapis.com/didna_hb/hockeydb/didna_config.js'></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<link href = "https://code.jquery.com/ui/1.11.1/themes/ui-lightness/jquery-ui.css" rel = "stylesheet">
<script src = "https://code.jquery.com/ui/1.11.1/jquery-ui.min.js"></script>
<script src = "/js/jquery.sticky-kit.js"></script>

<style>

   #draft_year_content a:link{color: #000000; }
   #draft_year_content a:visited{color: #000100; }

   .ui-widget-content {
       border: 1px solid #dddddd;
       background: #eeeeee;
       color: #333333;
   }

   .ui-widget-header {
       border: 1px solid #000000;
       background: #0091cc;;
       color: #ffffff;
       font-weight: bold;
   }

   #draftYear:hover {
       text-decoration: underline;
   }

   #tooltip
   {
       text-align: center;
       color: #fff;
       background: #111;
       position: absolute;
       z-index: 100;
       padding: 15px;
   }
 
   #tooltip:after /* triangle decoration */
   {
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #111;
      content: '';
      position: absolute;
      left: 50%;
      bottom: -10px;
      margin-left: -10px;
   }
 
   #tooltip.top:after
   {
      border-top-color: transparent;
      border-bottom: 10px solid #111;
      top: -20px;
      bottom: auto;
   }

   #tooltip.left:after
   {
      left: 10px;
      margin: 0;
   }

   #tooltip.right:after
   {
      right: 10px;
      left: auto;
      margin: 0;
   }
        
   #table_cont {
     float:left; 
   }

   #expand,#expand1 {
       font-size: 18px;
       background-color: red;
       color: white;
       width: 22px;
       height: 23px;
       float: left;
       text-align:center;
       margin-top: 10px;
       display:none;
   }

@media (max-width: 760px) {
   .hidemob {
      display:none;
   }

   .title {
      font-size:larger;
   }

   #table_cont {
     width:93%
   }

   #expand,#expand1 {
      display: inherit;
   }

   .tablebg {
      margin-right:8px;
   }
   
   .description {
      display:none;
   }
}
       
        
</style>

<script>
$(document).ready(function() {

  $('#expand,#expand1').click(function() {
   $('.hidemob').each(function(i, el) {
    $(el).css("display","table-cell");
   }
   );

   $('.d_nm').each(function(i, el) {
    $(el).css("max-width","initial");
    $(el).css("overflow","initial");
   }
   );

   $('.d_bp').each(function(i, el) {
    $(el).css("max-width","initial");
    $(el).css("overflow","initial");
   }
   );

   $('#expand').css("display","none");
   $('#table_cont').css("width","initial");
   $('#sortableTable0').css("table-layout","inherit");

 });

});

</script>

<script>

if (typeof $ == 'undefined') {
   var $ = jQuery;
}

jQuery( function()
{
    var targets = jQuery( '[rel~=tooltip]' ),
        target  = false,
        tooltip = false,
        title   = false;
 
    targets.bind( 'mouseenter', function()
    {
        target  = jQuery( this );
        tip     = target.attr( 'title' );
        tooltip = jQuery( '<div id=\"tooltip\"></div>' );
 
        if( !tip || tip == '' )
            return false;
 
        target.removeAttr( 'title' );
        tooltip.css( 'opacity', 0 )
               .html( tip )
               .appendTo( 'body' );
 
        var init_tooltip = function()
        {
            tooltip.css( 'max-width', 340);
 
            var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
                pos_top  = target.offset().top - tooltip.outerHeight() - 20;
 
            if( pos_left < 0 )
            {
                pos_left = target.offset().left + target.outerWidth() / 2 - 20;
                tooltip.addClass( 'left' );
            }
            else
                tooltip.removeClass( 'left' );
 
            if( pos_left + tooltip.outerWidth() > $( window ).width() )
            {
                pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                tooltip.addClass( 'right' );
            }
            else
                tooltip.removeClass( 'right' );
 
            if( pos_top < 0 )
            {
                var pos_top  = target.offset().top + target.outerHeight();
                tooltip.addClass( 'top' );
            }
            else
                tooltip.removeClass( 'top' );
 
            tooltip.css( { left: pos_left, top: pos_top } )
                   .animate( { top: '+=10', opacity: 1 }, 50 );
        };
 
        init_tooltip();
        $( window ).resize( init_tooltip );
 
        var remove_tooltip = function()
        {
            tooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
            {
                jQuery( this ).remove();
            });
 
            target.attr( 'title', tip );
        };
 
        target.bind( 'mouseleave', remove_tooltip );
        tooltip.bind( 'click', remove_tooltip );
    });
});
</script>


</head>

<body itemscope itemtype="http://schema.org/WebPage">

<div id="hdb_logo_div" style="float:left">
   <a href="/">          
   <img id="hdb_logo" src="/images/logo.gif" alt="hockey DB" width="166" height="75" style="border:0; height: 75px; width: 166px;" /></a>
</div>

<div id="hdb_logo_divv" style="float:left">
   <a href="/">          
   <img id="hdb_logov" src="/images/hdb-vert-2.gif" alt="hockey DB" width="40" style="border:0;" /></a>
</div>

  <div id="headerbar">
     <div id="hb_league">
        <a href="/ihdb/stats/leagues.html">
          <img src="/images/menu_league.gif" alt="search by league" width="126" height="48" style="border:0;" id="menu_league" /></a>
     </div>
     <div id="hb_team">
        <a href="/ihdb/stats/teams.html">
          <img src="/images/menu_team.gif" alt="team" width="116" height="48" style="border:0;" id="menu_team" /></a>
     </div>
     <div id="hb_scoreboard">
        <a href="/scoreboard">
          <img src="/images/menu_mr.gif" alt="morning report" width="112" height="48" style="border:0;" id="menu_mr" /></a>
     </div>
     <div id="hb_contact">
        <a href="/feedback.html" >
          <img src="/images/menu_contact.gif" alt="contact us" width="93" height="48" style="border:0;" id="menu_contact" /></a>
     </div>
   </div>

<div id="hb_black">
   <div id="hb_image">
     <img src="/images/hdr_hockeyDB.gif" alt="home" />
   </div>

   <div id="hb_red">
       <form name="player" method="get" action="/ihdb/stats/find_player.php">
         <div id="hb_form1"><input autocorrect="off" type="text" name="full_name" class="inp2" id="hb_search_resp"/></div>
         <div id="hb_form2"><input name="imageField" type="image" alt="search for player" src="/images/btn_player-search.gif" /></div>
       </form>
   </div>
</div>

<div id="topad" class="sponsor-top">
   <div id='top_leaderboard'>
   <script async src="/proxy/ad_proxy.js"></script>
   </div>
</div>

<div style="clear: left"></div>
<script>
function get_draft_years() {
  script = document.createElement('script');
  script.id = 'draft_year_script';
  script.src = '/ihdb/feed/jquery_draft_years.php?draft_type=e&draft_league=NHL';
  document.getElementsByTagName('head')[0].appendChild(script);
}
</script>



<script>

   jQuery( document ).ready(function( $ ) {
      $( "#dialog" ).dialog({
         autoOpen: false,  
         bgiframe: true,
         height: "auto",
         width: 125,
         closeOnEscape: true,
         position: { my: "left top", at: "left+50 bottom-50", of: "#draftYear" },
         modal: false
      });
      $( "#draftYear" ).click(function() {
         get_draft_years();
         $( "#dialog" ).dialog( "open" );
      });
   });
</script>
<p></p>
      <div id="dialog" title = "Other Years"><div id="draft_year_content"></div></div><br /><div class="tablebg">
<h1 class="title">2023 NHL Entry Draft</h1>
<div class="breadcrumb"><a href="https://www.hockeydb.com/ihdb/draft/index.html">Drafts</a> -> NHL -> Entry -> <span id="draftYear">2023</span></div>
<div style="width:850px" class="description">This is the list of players selected in the 2023 NHL Entry draft. There were 224 prospects selected across 7 rounds. Also included is each player's career NHL totals. If a player has no totals listed, this means that he has not played in a regular season game in the NHL. You can click on the headings of the tables to sort the information.</div>
<p></p>
<div id="table_cont">
<table class="sortable autostripe">
<thead>
<tr>
<th class="c_sec_head">Round 1</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="c_sec_head hidemob" colspan="5">NHL Totals </th>
<th class="norow hidemob">&nbsp;</th>
</tr>
<tr>
<th class="c_sort_head">Round</th>
<th class="c_sort_head">Num.</th>
<th class="c_sort_head">Drafted By</th>
<th class="c_sort_head">Player</th>
<th class="c_sort_head hidemob">Pos</th>
<th class="c_sort_head hidemob">Drafted From</th>
<th class="c_sort_head hidemob">GP</th>
<th class="c_sort_head hidemob">G</th>
<th class="c_sort_head hidemob">A</th>
<th class="c_sort_head hidemob">Pts</th>
<th class="c_sort_head hidemob">PIM</th>
<th class="c_sort_head hidemob">Last Season</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>1</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005218.html">Chicago</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=240679">Connor Bedard</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Regina Pats [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>2</td>
<td class="l"><a href="/ihdb/draft/teams/dr00004643.html">Anaheim</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=244172">Leo Carlsson</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Orebro HK [SweHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>3</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005316.html">Columbus</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=238272">Adam Fantilli</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">U. of Michigan [Big-10]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007877.html">San Jose</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248133">William Smith</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">U.S. National Development Team [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>5</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006929.html">Montreal</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=247058">David Reinbacher</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Kloten HC [Swiss-A]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>6</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007450.html">Arizona</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=260071">Dmitry Simashev</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Yaroslavl Loko Jr. [Rus-MHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>7</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007439.html">Philadelphia</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241596">Matvei Michkov</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">St. Petersburg SKA [KHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>8</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008871.html">Washington</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248126">Ryan Leonard</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">U.S. National Development Team [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>9</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005492.html">Detroit</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=240683">Nate Danielson</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Brandon Wheat Kings [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>10</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008187.html">St. Louis</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=238957">Dalibor Dvorsky</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">AIK [Swe-1]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>11</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008756.html">Vancouver</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248575">Tom Willander</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Rogle BK Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>12</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007450.html">Arizona</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=265421">Daniil But</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Yaroslavl Loko Jr. [Rus-MHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>13</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005054.html">Buffalo</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=240680">Zachary Benson</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Winnipeg Ice [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>14</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007475.html">Pittsburgh</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=240700">Brayden Yager</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Moose Jaw Warriors [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>15</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007024.html">Nashville</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241511">Matthew Wood</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">U. of Connecticut [H-East]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>16</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005090.html">Calgary</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=238384">Samuel Honzek</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Vancouver Giants [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>17</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005492.html">Detroit</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249530">Axel Sandin-Pellika</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Skelleftea AIK Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>18</td>
<td class="l"><a href="/ihdb/draft/teams/dr00010675.html">Winnipeg</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248686">Colby Barlow</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Owen Sound Attack [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>19</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005218.html">Chicago</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248128">Oliver Moore</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">U.S. National Development Team [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>20</td>
<td class="l"><a href="/ihdb/draft/teams/dr00012884.html">Seattle</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=251299">Eduard Sale</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Brno Kometa [Czech]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>21</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006879.html">Minnesota</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=238293">Charlie Stramel</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">U. of Wisconsin [Big-10]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>22</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007439.html">Philadelphia</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=250657">Oliver Bonk</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">London Knights [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>23</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007089.html">NY Rangers</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248129">Gabriel Perreault</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">U.S. National Development Team [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>24</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007024.html">Nashville</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241004">Tanner Molendyk</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Saskatoon Blades [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>25</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008187.html">St. Louis</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248005">Otto Stenberg</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Vastra Frolunda Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>26</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007877.html">San Jose</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248733">Quentin Musty</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Sudbury Wolves [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>27</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005307.html">Colorado</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248742">Calum Ritchie</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Oshawa Generals [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>28</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008490.html">Toronto</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=250018">Easton Cowan</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">London Knights [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>29</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008187.html">St. Louis</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=245906">Theo Lindstein</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Brynas IF Gavle [SweHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>30</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005154.html">Carolina</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248818">Bradley Nadeau</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Penticton Vees [BCHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>31</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005307.html">Colorado</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=260632">Mikhail Gulyayev</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Omskie Yastreby [Rus-MHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>1</td>
<td>32</td>
<td class="l"><a href="/ihdb/draft/teams/dr00011894.html">Vegas</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248006">David Edstrom</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Frolunda HC [SweHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr class="hideme">
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
</tr>
<tr class="hideme">
<th class="c_sec_head">Round 2</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
</tr><tr class="hideme">
<th class="c_sort_head">Round</th>
<th class="c_sort_head">Num.</th>
<th class="c_sort_head">Drafted By</th>
<th class="c_sort_head">Player</th>
<th class="c_sort_head hidemob">Pos</th>
<th class="c_sort_head hidemob">Drafted From</th>
<th class="c_sort_head hidemob">GP</th>
<th class="c_sort_head hidemob">G</th>
<th class="c_sort_head hidemob">A</th>
<th class="c_sort_head hidemob">Pts</th>
<th class="c_sort_head hidemob">PIM</th>
<th class="c_sort_head hidemob">Last Season</th>
</tr>
<tr>
<td>2</td>
<td>33</td>
<td class="l"><a href="/ihdb/draft/teams/dr00004643.html">Anaheim</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241300">Nico Myatovic</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Seattle Thunderbirds [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>34</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005316.html">Columbus</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=238086">Gavin Brindley</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">U. of Michigan [Big-10]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>35</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005218.html">Chicago</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=260540">Adam Gajan</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Chippewa Steel [NAHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>36</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007877.html">San Jose</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=262072">Kasper Halttunen</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">HIFK Helsinki [SM-liiga]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>37</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008385.html">Tampa Bay</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248038">Ethan Gauthier</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Sherbrooke Phoenix [QMJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>38</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007450.html">Arizona</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=261900">Michael Hrabal</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Omaha Lancers [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>39</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005054.html">Buffalo</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249109">Anton Wahlberg</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Malmo Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>40</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008871.html">Washington</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241126">Andrew Cristall</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Kelowna Rockets [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>41</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005492.html">Detroit</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248115">Trey Augustine</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">U.S. National Development Team [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>42</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005492.html">Detroit</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249029">Andrew Gibson</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Soo Greyhounds [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>43</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007024.html">Nashville</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249110">Felix Nilsson</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Rogle BK Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>44</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005218.html">Chicago</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=265424">Roman Kantserov</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Magnitogorsk (Rus-Jr)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>45</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005054.html">Buffalo</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=251322">Maxim Strbak</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Sioux Falls Stampede [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>46</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007024.html">Nashville</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=240690">Kalan Lind</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Red Deer Rebels [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>47</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005492.html">Detroit</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248119">Brady Cleveland</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">U.S. National Development Team [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>48</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005090.html">Calgary</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248059">Etienne Morin</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Moncton Wildcats [QMJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>49</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007085.html">NY Islanders</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=253078">Danny Nelson</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">U.S. National Development Team [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>50</td>
<td class="l"><a href="/ihdb/draft/teams/dr00012884.html">Seattle</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248740">Carson Rehkopf</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Kitchener Rangers [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>51</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007439.html">Philadelphia</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248080">Carson Bjarnason</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Brandon Wheat Kings [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>52</td>
<td class="l"><a href="/ihdb/draft/teams/dr00012884.html">Seattle</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249437">Oscar Fisker-Molgaard</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">HV71 Jonkoping [SweHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>53</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006879.html">Minnesota</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=264553">Rasmus Kumpulainen</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Pelicans (Finland Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>54</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006664.html">Los Angeles</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=261226">Jakub Dvorak</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Liberec Bili Tygri HC [Czech]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>55</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005218.html">Chicago</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=247842">Martin Misiak</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Youngstown Phantoms [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>56</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005632.html">Edmonton</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248607">Beau Akey</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Barrie Colts [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>57</td>
<td class="l"><a href="/ihdb/draft/teams/dr00012884.html">Seattle</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241294">Lukas Dragicevic</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Tri-City Americans [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>58</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007066.html">New Jersey</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=251537">Lenni Hameenaho</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Assat Pori [SM-liiga]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>59</td>
<td class="l"><a href="/ihdb/draft/teams/dr00004643.html">Anaheim</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248889">Carey Terrance</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Erie Otters [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>60</td>
<td class="l"><a href="/ihdb/draft/teams/dr00004643.html">Anaheim</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=252163">Damian Clara</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Farjestads Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>61</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005404.html">Dallas</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248864">Tristan Bertucci</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Flint Firebirds [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>62</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005154.html">Carolina</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=250774">Felix Unger-Sorum</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Leksands IF Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>63</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005763.html">Florida</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248130">Gracyn Sawchyn</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Seattle Thunderbirds [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>2</td>
<td>64</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006879.html">Minnesota</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241129">Riley Heidt</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Prince George Cougars [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr class="hideme">
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
</tr>
<tr class="hideme">
<th class="c_sec_head">Round 3</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
</tr><tr class="hideme">
<th class="c_sort_head">Round</th>
<th class="c_sort_head">Num.</th>
<th class="c_sort_head">Drafted By</th>
<th class="c_sort_head">Player</th>
<th class="c_sort_head hidemob">Pos</th>
<th class="c_sort_head hidemob">Drafted From</th>
<th class="c_sort_head hidemob">GP</th>
<th class="c_sort_head hidemob">G</th>
<th class="c_sort_head hidemob">A</th>
<th class="c_sort_head hidemob">Pts</th>
<th class="c_sort_head hidemob">PIM</th>
<th class="c_sort_head hidemob">Last Season</th>
</tr>
<tr>
<td>3</td>
<td>65</td>
<td class="l"><a href="/ihdb/draft/teams/dr00004643.html">Anaheim</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248882">Coulson Pitre</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Flint Firebirds [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>66</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005316.html">Columbus</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=250916">William Whitelaw</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Youngstown Phantoms [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>67</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005218.html">Chicago</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248626">Nick Lardis</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Hamilton Bulldogs [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>68</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007024.html">Nashville</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=262778">Jesse Kiiskinen</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Pelicans (Finland Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>69</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006929.html">Montreal</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=251665">Jacob Fowler</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Youngstown Phantoms [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>70</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007450.html">Arizona</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249134">Jonathan Castagna</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">St. Andrews College (Ontario H.S.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>71</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007877.html">San Jose</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=251494">Brandon Svoboda</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Youngstown Phantoms [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>72</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007450.html">Arizona</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249648">Noel Nordh</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Brynas Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>73</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005492.html">Detroit</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=250713">Noah Dower-Nilsson</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Vastra Frolunda Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>74</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008187.html">St. Louis</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248694">Quinton Burns</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Kingston Frontenacs [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>75</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008756.html">Vancouver</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=247713">Hunter Brzustewicz</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Kitchener Rangers [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>76</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008187.html">St. Louis</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249718">Juraj Pekarcik</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Nitra MHC [Slovak]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>77</td>
<td class="l"><a href="/ihdb/draft/teams/dr00011894.html">Vegas</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248027">Mathieu Cataford</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Halifax Mooseheads [QMJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>78</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006664.html">Los Angeles</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=230182">Koehn Ziemmer</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Prince George Cougars [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>79</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005404.html">Dallas</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248709">Brad Gardiner</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Ottawa 67's [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>80</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005090.html">Calgary</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=251765">Aydar Suniev</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Penticton Vees [BCHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>81</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007450.html">Arizona</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=247303">Tanner Ludtke</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Lincoln Stars [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>82</td>
<td class="l"><a href="/ihdb/draft/teams/dr00010675.html">Winnipeg</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266348">Zach Nehring</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Shattuck St. Mary's (U.S. H.S)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>83</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007024.html">Nashville</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248055">Dylan MacKinnon</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Halifax Mooseheads [QMJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>84</td>
<td class="l"><a href="/ihdb/draft/teams/dr00012884.html">Seattle</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248678">Caden Price</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Kelowna Rockets [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>85</td>
<td class="l"><a href="/ihdb/draft/teams/dr00004643.html">Anaheim</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248102">Yegor Sidorov</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Saskatoon Blades [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>86</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005054.html">Buffalo</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=247721">Gavin McCarthy</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Muskegon Lumberjacks [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>87</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007439.html">Philadelphia</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266386">Yegor Zavragin</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Khanty-Mansiysk Mamonty Ugry [Rus-MHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>88</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007450.html">Arizona</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=264455">Vadim Moroz</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Minsk Dynamo [KHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>89</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008756.html">Vancouver</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248299">Sawyer Mynio</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Seattle Thunderbirds [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>90</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007089.html">NY Rangers</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248122">Drew Fortescue</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">U.S. National Development Team [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>91</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007475.html">Pittsburgh</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266360">Emil Pieniniemi</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Karpat (Finland Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>92</td>
<td class="l"><a href="/ihdb/draft/teams/dr00004919.html">Boston</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=262070">Chris Pelosi</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Sioux Falls Stampede [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>93</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005218.html">Chicago</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266316">Jiri Felcman</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Langnau (Swiss Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>94</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005154.html">Carolina</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=247723">Jayden Perron</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Chicago Steel [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>95</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007439.html">Philadelphia</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248685">Denver Barkey</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">London Knights [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>3</td>
<td>96</td>
<td class="l"><a href="/ihdb/draft/teams/dr00011894.html">Vegas</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266327">Arttu Karki</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Tappara (Finland Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr class="hideme">
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
</tr>
<tr class="hideme">
<th class="c_sec_head">Round 4</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
</tr><tr class="hideme">
<th class="c_sort_head">Round</th>
<th class="c_sort_head">Num.</th>
<th class="c_sort_head">Drafted By</th>
<th class="c_sort_head">Player</th>
<th class="c_sort_head hidemob">Pos</th>
<th class="c_sort_head hidemob">Drafted From</th>
<th class="c_sort_head hidemob">GP</th>
<th class="c_sort_head hidemob">G</th>
<th class="c_sort_head hidemob">A</th>
<th class="c_sort_head hidemob">Pts</th>
<th class="c_sort_head hidemob">PIM</th>
<th class="c_sort_head hidemob">Last Season</th>
</tr>
<tr>
<td>4</td>
<td>97</td>
<td class="l"><a href="/ihdb/draft/teams/dr00004643.html">Anaheim</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248646">Konnor Smith</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Peterborough Petes [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>98</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005316.html">Columbus</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=247317">Andrew Strathmann</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Youngstown Phantoms [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>99</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005218.html">Chicago</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248737">Alex Pharand</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Sudbury Wolves [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>100</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005154.html">Carolina</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=265435">Alexander Rykov</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Chelmet (Russia Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>101</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006929.html">Montreal</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=262259">Florian Xhekaj</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Hamilton Bulldogs [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>102</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007450.html">Arizona</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241175">Terrell Goldsmith</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Prince Albert Raiders [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>103</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007439.html">Philadelphia</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=239560">Cole Knuble</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Fargo Force [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>104</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008871.html">Washington</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248755">Patrick Thomas</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Hamilton Bulldogs [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>105</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008756.html">Vancouver</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=218851">Ty Mueller</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">U. of Nebraska-Omaha [NCHC]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>106</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008187.html">St. Louis</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248906">Jakub Stancl</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Vaxjo Lakers Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>107</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008756.html">Vancouver</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=260113">Vilmer Alriksson</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Djurgardens Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>108</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007328.html">Ottawa</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=251800">Hoyt Stanley</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Victoria Grizzlies [BCHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>109</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005054.html">Buffalo</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248636">Ethan Miedema</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Kingston Frontenacs [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>110</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006929.html">Montreal</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=260074">Bogdan Konyushkov</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Nizhny Novgorod Torpedo [KHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>111</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007024.html">Nashville</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=262408">Joey Willis</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Saginaw Spirit [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>112</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005090.html">Calgary</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248296">Jaden Lipinski</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Vancouver Giants [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>113</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007085.html">NY Islanders</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=251646">Jesse Nurmi</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">KooKoo (Finland Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>114</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005316.html">Columbus</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249196">Luca Pinelli</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Ottawa 67's [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>115</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008385.html">Tampa Bay</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=252698">Jayson Shaugabay</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Warroad (Minn. H.S.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>116</td>
<td class="l"><a href="/ihdb/draft/teams/dr00012884.html">Seattle</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=250709">Andrei Loshko</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Chicoutimi Sagueneens [QMJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>117</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005492.html">Detroit</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266331">Larry Keenan</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Culver Academy (U.S. H.S.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>118</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006664.html">Los Angeles</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266370">Hampton Slukynsky</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Warroad (Minn. H.S.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>119</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008756.html">Vancouver</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=247690">Matthew Perkins</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Youngstown Phantoms [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>120</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007439.html">Philadelphia</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=244070">Alex Ciernik</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Sodertalje SK [Swe-1]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>121</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007024.html">Nashville</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=231561">Juha Jatkola</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">KalPa Kuopio [SM-liiga]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>122</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007066.html">New Jersey</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248528">Cam Squires</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Cape Breton Eagles [QMJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>123</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007877.html">San Jose</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=232318">Luca Cagnoni</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Portland Winterhawks [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>124</td>
<td class="l"><a href="/ihdb/draft/teams/dr00004919.html">Boston</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248124">Beckett Hendrickson</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">U.S. National Development Team [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>125</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005404.html">Dallas</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248127">Aram Minnetian</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">U.S. National Development Team [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>126</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005154.html">Carolina</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=262908">Stanislav Yarovoi</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Podolsk Vityaz [KHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>127</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005763.html">Florida</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=251102">Albert Wikman</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Farjestads Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>4</td>
<td>128</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006929.html">Montreal</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=262829">Quentin Miller</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Quebec Remparts [QMJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr class="hideme">
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
</tr>
<tr class="hideme">
<th class="c_sec_head">Round 5</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
</tr><tr class="hideme">
<th class="c_sort_head">Round</th>
<th class="c_sort_head">Num.</th>
<th class="c_sort_head">Drafted By</th>
<th class="c_sort_head">Player</th>
<th class="c_sort_head hidemob">Pos</th>
<th class="c_sort_head hidemob">Drafted From</th>
<th class="c_sort_head hidemob">GP</th>
<th class="c_sort_head hidemob">G</th>
<th class="c_sort_head hidemob">A</th>
<th class="c_sort_head hidemob">Pts</th>
<th class="c_sort_head hidemob">PIM</th>
<th class="c_sort_head hidemob">Last Season</th>
</tr>
<tr>
<td>5</td>
<td>129</td>
<td class="l"><a href="/ihdb/draft/teams/dr00004643.html">Anaheim</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248617">Rodwin Dionicio</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Windsor Spitfires [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>130</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007877.html">San Jose</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=247191">Axel Landen</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">HV71 Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>131</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005218.html">Chicago</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=252275">Marcel Marcel</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Gatineau Olympiques [QMJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>132</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007877.html">San Jose</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=240950">Eric Pohlkamp</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Cedar Rapids RoughRiders [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>133</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006929.html">Montreal</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=247719">Sam Harris</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Sioux Falls Stampede [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>134</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007450.html">Arizona</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=251637">Melker Thelin</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Bjorkloven (Sweden Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>135</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007439.html">Philadelphia</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=261516">Carter Sotheran</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Portland Winterhawks [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>136</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008871.html">Washington</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248683">Cam Allen</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Guelph Storm [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>137</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005492.html">Detroit</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=251262">Jack Phelan</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Sioux Falls Stampede [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>138</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008187.html">St. Louis</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248121">Paul Fischer</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">U.S. National Development Team [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>139</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005154.html">Carolina</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=230661">Charles-Alexis Legault</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Quinnipiac University [ECAC]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>140</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007328.html">Ottawa</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249193">Matthew Andonovski</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Kitchener Rangers [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>141</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005054.html">Buffalo</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241593">Scott Ratzlaff</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Seattle Thunderbirds [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>142</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007475.html">Pittsburgh</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=265429">Mikhail Ilyin</a></td>
<td class="hidemob">F</td>
<td class="l hidemob">Cherepovets (Russia Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>143</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007024.html">Nashville</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=228892">Sutter Muzzatti</a></td>
<td class="hidemob">F</td>
<td class="l hidemob">R.P.I. [ECAC]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>144</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006929.html">Montreal</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266557">Yevgeni Volokhin</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Khanty-Mansiysk Mamonty Ugry [Rus-MHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>145</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007085.html">NY Islanders</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=227321">Justin Gill</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Sherbrooke Phoenix [QMJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>146</td>
<td class="l"><a href="/ihdb/draft/teams/dr00010675.html">Winnipeg</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=264326">Jacob Julien</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">London Knights [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>147</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005492.html">Detroit</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=264300">Kevin Bicker</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Mannheim (Germany Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>148</td>
<td class="l"><a href="/ihdb/draft/teams/dr00012884.html">Seattle</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241244">Kaden Hammell</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Everett Silvertips [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>149</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006879.html">Minnesota</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241389">Aaron Pionk</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Waterloo Black Hawks [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>150</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006664.html">Los Angeles</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=247887">Matthew Mania</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Sudbury Wolves [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>151</td>
<td class="l"><a href="/ihdb/draft/teams/dr00010675.html">Winnipeg</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=230583">Thomas Milic</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Seattle Thunderbirds [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>152</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007089.html">NY Rangers</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249843">Rasmus Larsson</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Vasteras Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>153</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008490.html">Toronto</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=260885">Hudson Malinoski</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Brooks Bandits [AJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>154</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007066.html">New Jersey</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=260517">Chase Cheslock</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Rogers (Minn. H.S.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>155</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005307.html">Colorado</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266323">Nikita Ishimnikov</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Yekaterinburg Auto Jr. [Rus-MHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>156</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005316.html">Columbus</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=251654">Melvin Strahl</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">MoDo Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>157</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005404.html">Dallas</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=237812">Arno Tiefensee</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Mannheim Eagles [DEL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>158</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005154.html">Carolina</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266334">Ruslan Khazheyev</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Chelyabinsk (Russia Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>159</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005763.html">Florida</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=262156">Olof Glifford</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">HV71 Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>160</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007450.html">Arizona</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249106">Justin Kipkie</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Victoria Royals [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>5</td>
<td>161</td>
<td class="l"><a href="/ihdb/draft/teams/dr00004643.html">Anaheim</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=261511">Vojtech Port</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Edmonton Oil Kings [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr class="hideme">
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
</tr>
<tr class="hideme">
<th class="c_sec_head">Round 6</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
</tr><tr class="hideme">
<th class="c_sort_head">Round</th>
<th class="c_sort_head">Num.</th>
<th class="c_sort_head">Drafted By</th>
<th class="c_sort_head">Player</th>
<th class="c_sort_head hidemob">Pos</th>
<th class="c_sort_head hidemob">Drafted From</th>
<th class="c_sort_head hidemob">GP</th>
<th class="c_sort_head hidemob">G</th>
<th class="c_sort_head hidemob">A</th>
<th class="c_sort_head hidemob">Pts</th>
<th class="c_sort_head hidemob">PIM</th>
<th class="c_sort_head hidemob">Last Season</th>
</tr>
<tr>
<td>6</td>
<td>162</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007450.html">Arizona</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=254393">Samu Bau</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Ilves Tampere [SM-liiga]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>163</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005154.html">Carolina</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=265409">Timur Mukhanov</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Omskie Yastreby [Rus-MHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>164</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007066.html">New Jersey</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249907">Cole Brown</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Hamilton Bulldogs [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>165</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006929.html">Montreal</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=260048">Filip Eriksson</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Vaxjo Lakers Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>166</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007450.html">Arizona</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248314">Carsen Musser</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">U.S. National Development Team [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>167</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005218.html">Chicago</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=239567">Milton Oscarson</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Orebro HK [SweHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>168</td>
<td class="l"><a href="/ihdb/draft/teams/dr00012884.html">Seattle</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266376">Visa Vedenpaa</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Karpat (Finland Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>169</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005492.html">Detroit</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266319">Rudy Guimond</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Taft School (Conn. H.S.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>170</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008187.html">St. Louis</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248729">Matthew Mayich</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Ottawa 67's [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>171</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008756.html">Vancouver</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=260849">Aiden Celebrini</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Brooks Bandits [AJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>172</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007439.html">Philadelphia</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266339">Ryan MacPherson</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Leamington Flyers [GOJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>173</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005054.html">Buffalo</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266332">Sean Keohane</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Dexter School (Mass. H.S.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>174</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007475.html">Pittsburgh</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=247610">Cooper Foster</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Ottawa 67's [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>175</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007024.html">Nashville</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241008">Austin Roest</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Everett Silvertips [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>176</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005090.html">Calgary</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266558">Yegor Yegorov</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Moscow Dynamo (Russia Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>177</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007085.html">NY Islanders</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248131">Zachary Schulz</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">U.S. National Development Team [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>178</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007089.html">NY Rangers</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=232365">Dylan Roobroeck</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Oshawa Generals [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>179</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008385.html">Tampa Bay</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=251542">Warren Clark</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Steinbach Pistons [MJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>180</td>
<td class="l"><a href="/ihdb/draft/teams/dr00012884.html">Seattle</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=246622">Zeb Forsfjall</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Skelleftea AIK Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>181</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006879.html">Minnesota</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241173">Kalem Parker</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Victoria Royals [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>182</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006664.html">Los Angeles</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=261373">Ryan Conmy</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Sioux City Musketeers [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>183</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007089.html">NY Rangers</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=262975">Ty Henricks</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Muskegon Lumberjacks [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>184</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005632.html">Edmonton</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249599">Nathaniel Day</a></td>
<td class="hidemob">G</td>
<td class="l hidemob">Flint Firebirds [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>185</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008490.html">Toronto</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249926">Noah Chadwick</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Lethbridge Hurricanes [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>186</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007066.html">New Jersey</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266329">Daniil Karpovich</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Yekaterinburg Auto Jr. [Rus-MHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>187</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005307.html">Colorado</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=230140">Jeremy Hanzel</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Seattle Thunderbirds [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>188</td>
<td class="l"><a href="/ihdb/draft/teams/dr00004919.html">Boston</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=261398">Ryan Walsh</a></td>
<td class="hidemob">F</td>
<td class="l hidemob">Cedar Rapids RoughRiders [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>189</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005404.html">Dallas</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248630">Angus MacDonell</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Mississauga Steelheads [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>190</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005154.html">Carolina</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=239228">Michael Emerson</a></td>
<td class="hidemob">F</td>
<td class="l hidemob">Chicago Steel [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>191</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005763.html">Florida</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248031">Luke Coughlin</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Rimouski Oceanic [QMJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>6</td>
<td>192</td>
<td class="l"><a href="/ihdb/draft/teams/dr00011894.html">Vegas</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=262428">Tuomas Uronen</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">HIFK (Finland Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr class="hideme">
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
</tr>
<tr class="hideme">
<th class="c_sec_head">Round 7</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
<th class="norow hidemob">&nbsp;</th>
</tr><tr class="hideme">
<th class="c_sort_head">Round</th>
<th class="c_sort_head">Num.</th>
<th class="c_sort_head">Drafted By</th>
<th class="c_sort_head">Player</th>
<th class="c_sort_head hidemob">Pos</th>
<th class="c_sort_head hidemob">Drafted From</th>
<th class="c_sort_head hidemob">GP</th>
<th class="c_sort_head hidemob">G</th>
<th class="c_sort_head hidemob">A</th>
<th class="c_sort_head hidemob">Pts</th>
<th class="c_sort_head hidemob">PIM</th>
<th class="c_sort_head hidemob">Last Season</th>
</tr>
<tr>
<td>7</td>
<td>193</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008385.html">Tampa Bay</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=228849">Jack Harvey</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Chicago Steel [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>194</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005316.html">Columbus</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266333">Oiva Keskinen</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Tappara (Finland Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>195</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005218.html">Chicago</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266357">Janne Peltonen</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Karpat (Finland Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>196</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007877.html">San Jose</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=250861">David Klee</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Waterloo Black Hawks [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>197</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006929.html">Montreal</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=238133">Luke Mittelstadt</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">U. of Minnesota [Big-10]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>198</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005763.html">Florida</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=265419">Stepan Zvyagin</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">DINAMO-SHINNIK JR.</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>199</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007439.html">Philadelphia</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=235318">Matteo Mann</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Chicoutimi Sagueneens [QMJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>200</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008871.html">Washington</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=229080">Brett Hyland</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Brandon Wheat Kings [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>201</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005492.html">Detroit</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248290">Emmitt Finnie</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Kamloops Blazers [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>202</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008187.html">St. Louis</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=265445">Nikita Susuyev</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Moscow Spartak (Russia Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>203</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007877.html">San Jose</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266364">Yegor Rimashevsky</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Moscow Dynamo (Russia Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>204</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007328.html">Ottawa</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=249183">Owen Beckner</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Salmon Arm Silverbacks [BCHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>205</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005054.html">Buffalo</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=264785">Norwin Panocha</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Berlin Polar Bears (Germany Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>206</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008871.html">Washington</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266559">Antoine Keller</a></td>
<td class="hidemob"></td>
<td class="l hidemob">Geneve (Swiss Jr.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>207</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007328.html">Ottawa</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266560">Vladimir Nikitin</a></td>
<td class="hidemob"></td>
<td class="l hidemob">BARYS NUR-SULTAN U20</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>208</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005090.html">Calgary</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=251650">Axel Hurtig</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Rogle BK Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>209</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007085.html">NY Islanders</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=245613">Dennis Good-Bogg</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">AIK Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>210</td>
<td class="l"><a href="/ihdb/draft/teams/dr00010675.html">Winnipeg</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=231385">Connor Levis</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Kamloops Blazers [WHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>211</td>
<td class="l"><a href="/ihdb/draft/teams/dr00008385.html">Tampa Bay</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248870">Ethan Hay</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Flint Firebirds [OHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>212</td>
<td class="l"><a href="/ihdb/draft/teams/dr00012884.html">Seattle</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=247322">Zaccharya Wisdom</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Cedar Rapids RoughRiders [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>213</td>
<td class="l"><a href="/ihdb/draft/teams/dr00006879.html">Minnesota</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241365">Jimmy Clark</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Green Bay Gamblers [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>214</td>
<td class="l"><a href="/ihdb/draft/teams/dr00004919.html">Boston</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=245653">Casper Nassen</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Vasteras Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>215</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007328.html">Ottawa</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=247318">Nicholas Van Tassell</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Green Bay Gamblers [USHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>216</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005632.html">Edmonton</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=241764">Matt Copponi</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Merrimack College [H-East]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>217</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007475.html">Pittsburgh</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248316">Emil Jarventie</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Ilves (Finland Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>218</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007024.html">Nashville</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=246282">Aiden Fink</a></td>
<td class="hidemob">R</td>
<td class="l hidemob">Brooks Bandits [AJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>219</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005307.html">Colorado</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=236693">Maros Jedlicka</a></td>
<td class="hidemob">C</td>
<td class="l hidemob">Zvolen HKm [Slovak]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>220</td>
<td class="l"><a href="/ihdb/draft/teams/dr00004919.html">Boston</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=260055">Kristian Kostadinski</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Vastra Frolunda Jr. [Swe-Jr]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>221</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005404.html">Dallas</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266308">Sebastian Bradshaw</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Elite Hockey Academy U18</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>222</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005154.html">Carolina</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266561">Yegor Velmakin</a></td>
<td class="hidemob"></td>
<td class="l hidemob">Minsk Dynamo (Belarus Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>223</td>
<td class="l"><a href="/ihdb/draft/teams/dr00007475.html">Pittsburgh</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=266326">Kalle Kangas</a></td>
<td class="hidemob">D</td>
<td class="l hidemob">Jokerit (Finland Jrs.)</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
<tr>
<td>7</td>
<td>224</td>
<td class="l"><a href="/ihdb/draft/teams/dr00005316.html">Columbus</a></td>
<td class="l"><a target="players" href="/ihdb/stats/pdisplay.php?pid=248062">Tyler Peddle</a></td>
<td class="hidemob">L</td>
<td class="l hidemob">Drummondville Voltigeurs [QMJHL]</td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 r "></td>
<td class="hidemob shade4 c "></td>
</tr>
</tbody></table>
</div>
<br /><div id="expand">+</div>
<div>
<h3 style="clear:left">Draft Stats</h3>
<p>Total drafted players to play in NHL: 0</p>
<p>Percent of players to play in NHL: 0</p>
<p>Average NHL Career Games: 0</p>
<p>Average NHL Career Goals: 0</p>
<p>Average NHL Career Points: 0</p>
<p>Average NHL Career PIM: 0</p>
</div>
<p></p>
<h2>Drafting Team Order and Transactions</h2>
<div id="transactions" class="hidemob">
<table style="width:700px">
<tr class="c_sec_head">
<th>Pos</th>
<th>Round 1</th>
<th>Round 2</th>
<th>Round 3</th>
<th>Round 4</th>
<th>Round 5</th>
<th>Round 6</th>
<th>Round 7</th>
</tr>
<tr>
<td>1</td>
<td class="l">
Chicago</td>
<td class="l">
Anaheim</td>
<td class="l">
Anaheim</td>
<td class="l">
Anaheim</td>
<td class="l">
Anaheim</td>
<td class="l">
Anaheim</td>
<td rel="tooltip" title="Acquired from Anaheim with  <a href='/ihdb/stats/pdisplay.php?pid=186229'>Antoine Morand</a> for  <a href='/ihdb/stats/pdisplay.php?pid=205470'>Alexander Volkov</a>. " class="l">
Tampa Bay<sup><a href="#70">70</a></sup>
</td>
</tr>
<tr>
<td>2</td>
<td class="l">
Anaheim</td>
<td class="l">
Columbus</td>
<td class="l">
Columbus</td>
<td class="l">
Columbus</td>
<td rel="tooltip" title="Acquired from Columbus  for  round 5 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=240671'>Sergei Ivanov</a>). " class="l">
San Jose<sup><a href="#56">56</a></sup>
</td>
<td rel="tooltip" title="Acquired from Columbus with  <a href='/ihdb/stats/pdisplay.php?pid=93546'>Jakub Voracek</a> for  <a href='/ihdb/stats/pdisplay.php?pid=130895'>Jon Gillies</a>. " class="l">
Arizona<sup><a href="#64">64</a></sup>
</td>
<td class="l">
Columbus</td>
</tr>
<tr>
<td>3</td>
<td class="l">
Columbus</td>
<td class="l">
Chicago</td>
<td class="l">
Chicago</td>
<td class="l">
Chicago</td>
<td class="l">
Chicago</td>
<td rel="tooltip" title="Acquired from Chicago  for  round 6 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=243876'>Nils Juntorp</a>). " class="l">
Carolina<sup><a href="#65">65</a></sup>
</td>
<td class="l">
Chicago</td>
</tr>
<tr>
<td>4</td>
<td class="l">
San Jose</td>
<td class="l">
San Jose</td>
<td rel="tooltip" title="Acquired from San Jose with  <a href='/ihdb/stats/pdisplay.php?pid=187532'>John Leonard</a> for  <a href='/ihdb/stats/pdisplay.php?pid=170310'>Luke Kunin</a>. " class="l">
Nashville<sup><a href="#25">25</a></sup>
</td>
<td rel="tooltip" title="Acquired from San Jose with  round 3 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=247723'>Jayden Perron</a>) for  round 3 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=251494'>Brandon Svoboda</a>). " class="l">
Carolina<sup><a href="#45">45</a></sup>
</td>
<td class="l">
San Jose</td>
<td rel="tooltip" title="Acquired from San Jose  for  <a href='/ihdb/stats/pdisplay.php?pid=162424'>Mackenzie Blackwood</a>. " class="l">
New Jersey<sup><a href="#66">66</a></sup>
</td>
<td class="l">
San Jose</td>
</tr>
<tr>
<td>5</td>
<td class="l">
Montreal</td>
<td rel="tooltip" title="Acquired from Colorado  for  <a href='/ihdb/stats/pdisplay.php?pid=177637'>Ross Colton</a>.  Pick previously acquired by Colorado from Montreal with  <a href='/ihdb/stats/pdisplay.php?pid=192904'>Gianni Fairbrother</a> and round 1 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=260632'>Mikhail Gulyayev</a>) for  <a href='/ihdb/stats/pdisplay.php?pid=200446'>Alex Newhook</a>. " class="l">
Tampa Bay<sup><a href="#11">11</a></sup>
</td>
<td class="l">
Montreal</td>
<td class="l">
Montreal</td>
<td class="l">
Montreal</td>
<td class="l">
Montreal</td>
<td class="l">
Montreal</td>
</tr>
<tr>
<td>6</td>
<td class="l">
Arizona</td>
<td class="l">
Arizona</td>
<td class="l">
Arizona</td>
<td class="l">
Arizona</td>
<td class="l">
Arizona</td>
<td class="l">
Arizona</td>
<td rel="tooltip" title="Acquired from Arizona  for  <a href='/ihdb/stats/pdisplay.php?pid=84630'>Anton Stralman</a>, <a href='/ihdb/stats/pdisplay.php?pid=216625'>Vladislav Kolyachonok</a> and round 2 pick in the 2024 draft. " class="l">
Florida<sup><a href="#71">71</a></sup>
</td>
</tr>
<tr>
<td>7</td>
<td class="l">
Philadelphia</td>
<td rel="tooltip" title="Acquired from Philadelphia with  <a href='/ihdb/stats/pdisplay.php?pid=161943'>Robert Hagg</a> and round 1 pick in the 2021 draft (<a href='/ihdb/stats/pdisplay.php?pid=233734'>Isak Rosen</a>) for  <a href='/ihdb/stats/pdisplay.php?pid=139048'>Rasmus Ristolainen</a>. " class="l">
Buffalo<sup><a href="#12">12</a></sup>
</td>
<td rel="tooltip" title="Acquired from Carolina  for  round 3 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=247723'>Jayden Perron</a>) and round 4 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=265435'>Alexander Rykov</a>).  Pick previously acquired by Carolina from Philadelphia with  round 4 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=238781'>Simon Forsmark</a>) and round 2 pick in the 2024 draft for  <a href='/ihdb/stats/pdisplay.php?pid=130876'>Tony DeAngelo</a> and round 7 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=235308'>Alexis Gendron</a>). " class="l">
San Jose<sup><a href="#26">26</a></sup>
</td>
<td class="l">
Philadelphia</td>
<td class="l">
Philadelphia</td>
<td class="l">
Philadelphia</td>
<td class="l">
Philadelphia</td>
</tr>
<tr>
<td>8</td>
<td class="l">
Washington</td>
<td class="l">
Washington</td>
<td rel="tooltip" title="Acquired from Washington  for  <a href='/ihdb/stats/pdisplay.php?pid=127786'>Johan Larsson</a>. " class="l">
Arizona<sup><a href="#27">27</a></sup>
</td>
<td class="l">
Washington</td>
<td class="l">
Washington</td>
<td rel="tooltip" title="Acquired from Washington with  <a href='/ihdb/stats/pdisplay.php?pid=169637'>Daniel Sprong</a> and round 4 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=238292'>Cole Spicer</a>) for  <a href='/ihdb/stats/pdisplay.php?pid=98452'>Marcus Johansson</a>. " class="l">
Seattle<sup><a href="#67">67</a></sup>
</td>
<td class="l">
Washington</td>
</tr>
<tr>
<td>9</td>
<td class="l">
Detroit</td>
<td class="l">
Detroit</td>
<td class="l">
Detroit</td>
<td rel="tooltip" title="Acquired from Detroit with  <a href='/ihdb/stats/pdisplay.php?pid=180904'>Filip Hronek</a> for  round 1 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=249530'>Axel Sandin-Pellika</a>) and round 2 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=249110'>Felix Nilsson</a>). " class="l">
Vancouver<sup><a href="#46">46</a></sup>
</td>
<td class="l">
Detroit</td>
<td class="l">
Detroit</td>
<td class="l">
Detroit</td>
</tr>
<tr>
<td>10</td>
<td class="l">
St. Louis</td>
<td rel="tooltip" title="Acquired from St. Louis with  <a href='/ihdb/stats/pdisplay.php?pid=169430'>Jake Walman</a> and <a href='/ihdb/stats/pdisplay.php?pid=155343'>Oskar Sundqvist</a> for  <a href='/ihdb/stats/pdisplay.php?pid=107582'>Luke Witkowski</a> and <a href='/ihdb/stats/pdisplay.php?pid=119093'>Nick Leddy</a>. " class="l">
Detroit<sup><a href="#13">13</a></sup>
</td>
<td class="l">
St. Louis</td>
<td class="l">
St. Louis</td>
<td class="l">
St. Louis</td>
<td class="l">
St. Louis</td>
<td class="l">
St. Louis</td>
</tr>
<tr>
<td>11</td>
<td class="l">
Vancouver</td>
<td rel="tooltip" title="Acquired from Detroit  for  round 2 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=248119'>Brady Cleveland</a>) and round 5 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=264300'>Kevin Bicker</a>).  Pick previously acquired by Detroit from Vancouver with  round 1 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=249530'>Axel Sandin-Pellika</a>) for  <a href='/ihdb/stats/pdisplay.php?pid=180904'>Filip Hronek</a> and round 4 pick in the 2023 draft. " class="l">
Nashville<sup><a href="#14">14</a></sup>
</td>
<td class="l">
Vancouver</td>
<td class="l">
Vancouver</td>
<td rel="tooltip" title="Acquired from Vancouver  for  <a href='/ihdb/stats/pdisplay.php?pid=164825'>Ethan Bear</a> and <a href='/ihdb/stats/pdisplay.php?pid=170214'>Lane Pederson</a>. " class="l">
Carolina<sup><a href="#57">57</a></sup>
</td>
<td class="l">
Vancouver</td>
<td rel="tooltip" title="Acquired from Arizona  for  round 7 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=247732'>Adam Zlnka</a>).  Pick previously acquired by Arizona from Vancouver with  <a href='/ihdb/stats/pdisplay.php?pid=93172'>Jay Beagle</a>, <a href='/ihdb/stats/pdisplay.php?pid=97899'>Antoine Roussel</a>, <a href='/ihdb/stats/pdisplay.php?pid=72639'>Loui Eriksson</a>, round 1 pick in the 2021 draft (<a href='/ihdb/stats/pdisplay.php?pid=218245'>Dylan Guenther</a>) and round 2 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=248624'>Hunter Haight</a>) for  <a href='/ihdb/stats/pdisplay.php?pid=120283'>Oliver Ekman-Larsson</a> and <a href='/ihdb/stats/pdisplay.php?pid=158171'>Conor Garland</a>. " class="l">
San Jose<sup><a href="#72">72</a></sup>
</td>
</tr>
<tr>
<td>12</td>
<td rel="tooltip" title="Acquired from Ottawa with  round 2 pick in the 2024 draft and round 2 pick in the 2026 draft for  <a href='/ihdb/stats/pdisplay.php?pid=177557'>Jakob Chychrun</a>. " class="l">
Arizona<sup><a href="#1">1</a></sup>
</td>
<td rel="tooltip" title="Acquired from Ottawa with  <a href='/ihdb/stats/pdisplay.php?pid=122837'>Nikita Zaitsev</a> and round 4 pick in the 2026 draft for  future considerations. " class="l">
Chicago<sup><a href="#15">15</a></sup>
</td>
<td rel="tooltip" title="Acquired from Toronto with  <a href='/ihdb/stats/pdisplay.php?pid=177644'>Adam Gaudette</a>, <a href='/ihdb/stats/pdisplay.php?pid=216515'>Mikhail Abramov</a>, round 1 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=248005'>Otto Stenberg</a>) and round 2 pick in the 2024 draft for  <a href='/ihdb/stats/pdisplay.php?pid=160732'>Noel Acciari</a>.  Pick previously acquired by Toronto from Ottawa with  <a href='/ihdb/stats/pdisplay.php?pid=130608'>Matt Murray</a> and round 7 pick in the 2024 draft for  future considerations. " class="l">
St. Louis<sup><a href="#28">28</a></sup>
</td>
<td class="l">
Ottawa</td>
<td class="l">
Ottawa</td>
<td rel="tooltip" title="Acquired from Ottawa  for  <a href='/ihdb/stats/pdisplay.php?pid=131798'>Patrick Brown</a>. " class="l">
Philadelphia<sup><a href="#68">68</a></sup>
</td>
<td class="l">
Ottawa</td>
</tr>
<tr>
<td>13</td>
<td class="l">
Buffalo</td>
<td class="l">
Buffalo</td>
<td rel="tooltip" title="Acquired from Buffalo with  <a href='/ihdb/stats/pdisplay.php?pid=158169'>Jack Eichel</a> for  <a href='/ihdb/stats/pdisplay.php?pid=197782'>Peyton Krebs</a>, <a href='/ihdb/stats/pdisplay.php?pid=160632'>Alex Tuch</a>, round 1 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=244119'>Noah Ostlund</a>) and round 2 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=241129'>Riley Heidt</a>). " class="l">
Vegas<sup><a href="#29">29</a></sup>
</td>
<td class="l">
Buffalo</td>
<td class="l">
Buffalo</td>
<td class="l">
Buffalo</td>
<td class="l">
Buffalo</td>
</tr>
<tr>
<td>14</td>
<td class="l">
Pittsburgh</td>
<td rel="tooltip" title="Acquired from Pittsburgh  for  <a href='/ihdb/stats/pdisplay.php?pid=118389'>Mikael Granlund</a>. " class="l">
Nashville<sup><a href="#16">16</a></sup>
</td>
<td rel="tooltip" title="Acquired from Pittsburgh with  round 3 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=223811'>Lucas Edmonds</a>) for  <a href='/ihdb/stats/pdisplay.php?pid=59691'>Jeff Carter</a>. " class="l">
Los Angeles<sup><a href="#30">30</a></sup>
</td>
<td rel="tooltip" title="Acquired from Pittsburgh with  <a href='/ihdb/stats/pdisplay.php?pid=145514'>Mike Matheson</a> for  <a href='/ihdb/stats/pdisplay.php?pid=191764'>Ryan Poehling</a> and <a href='/ihdb/stats/pdisplay.php?pid=94006'>Jeff Petry</a>. " class="l">
Montreal<sup><a href="#47">47</a></sup>
</td>
<td class="l">
Pittsburgh</td>
<td class="l">
Pittsburgh</td>
<td rel="tooltip" title="Acquired from San Jose  for  round 7 pick in the 2025 draft.  Pick previously acquired by San Jose from Pittsburgh  for  <a href='/ihdb/stats/pdisplay.php?pid=200766'>Tony Sund</a>. " class="l">
Washington<sup><a href="#73">73</a></sup>
</td>
</tr>
<tr>
<td>15</td>
<td class="l">
Nashville</td>
<td rel="tooltip" title="Acquired from Nashville with  round 5 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=264300'>Kevin Bicker</a>) for  round 2 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=249110'>Felix Nilsson</a>). " class="l">
Detroit<sup><a href="#17">17</a></sup>
</td>
<td rel="tooltip" title="Acquired from Nashville  for  round 3 pick in the 2024 draft and round 6 pick in the 2024 draft. " class="l">
Dallas<sup><a href="#31">31</a></sup>
</td>
<td class="l">
Nashville</td>
<td class="l">
Nashville</td>
<td class="l">
Nashville</td>
<td rel="tooltip" title="Acquired from Nashville with  <a href='/ihdb/stats/pdisplay.php?pid=160558'>Brandon Fortunato</a> for  <a href='/ihdb/stats/pdisplay.php?pid=116033'>Erik Gudbranson</a>. " class="l">
Ottawa<sup><a href="#74">74</a></sup>
</td>
</tr>
<tr>
<td>16</td>
<td class="l">
Calgary</td>
<td class="l">
Calgary</td>
<td rel="tooltip" title="Acquired from New Jersey with  <a href='/ihdb/stats/pdisplay.php?pid=207017'>Yegor Sharangovich</a> for  <a href='/ihdb/stats/pdisplay.php?pid=115633'>Tyler Toffoli</a>.  Pick previously acquired by New Jersey from Columbus  for  <a href='/ihdb/stats/pdisplay.php?pid=124610'>Damon Severson</a>.  Pick previously acquired by Columbus from Seattle with  round 4 pick in the 2023 draft for  <a href='/ihdb/stats/pdisplay.php?pid=155408'>Oliver Bjorkstrand</a>.  Pick previously acquired by Seattle from Calgary with  round 2 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=239056'>David Goyette</a>) and round 7 pick in the 2024 draft for  <a href='/ihdb/stats/pdisplay.php?pid=127561'>Calle Jarnkrok</a>. " class="l">
Calgary<sup><a href="#32">32</a></sup>
</td>
<td class="l">
Calgary</td>
<td rel="tooltip" title="Acquired from Calgary with  <a href='/ihdb/stats/pdisplay.php?pid=232198'>Emil Heineman</a>, <a href='/ihdb/stats/pdisplay.php?pid=123515'>Tyler Pitlick</a> and round 1 pick in the 2022 draft for  <a href='/ihdb/stats/pdisplay.php?pid=115633'>Tyler Toffoli</a>. " class="l">
Montreal<sup><a href="#58">58</a></sup>
</td>
<td class="l">
Calgary</td>
<td class="l">
Calgary</td>
</tr>
<tr>
<td>17</td>
<td rel="tooltip" title="Acquired from Vancouver with  round 2 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=249110'>Felix Nilsson</a>) for  <a href='/ihdb/stats/pdisplay.php?pid=180904'>Filip Hronek</a> and round 4 pick in the 2023 draft.  Pick previously acquired by Vancouver from NY Islanders with  <a href='/ihdb/stats/pdisplay.php?pid=227734'>Aatu Raty</a> and <a href='/ihdb/stats/pdisplay.php?pid=169563'>Anthony Beauvillier</a> for  <a href='/ihdb/stats/pdisplay.php?pid=145053'>Bo Horvat</a>. " class="l">
Detroit<sup><a href="#2">2</a></sup>
</td>
<td class="l">
NY Islanders</td>
<td rel="tooltip" title="Acquired from NY Islanders with  <a href='/ihdb/stats/pdisplay.php?pid=62622'>Andrew Ladd</a>, round 2 pick in the 2021 draft (<a href='/ihdb/stats/pdisplay.php?pid=213738'>J.J. Moser</a>) and round 2 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=244129'>Mattias Havelid</a>) for  future considerations. " class="l">
Arizona<sup><a href="#33">33</a></sup>
</td>
<td class="l">
NY Islanders</td>
<td class="l">
NY Islanders</td>
<td class="l">
NY Islanders</td>
<td class="l">
NY Islanders</td>
</tr>
<tr>
<td>18</td>
<td class="l">
Winnipeg</td>
<td rel="tooltip" title="Acquired from Washington  for  <a href='/ihdb/stats/pdisplay.php?pid=171229'>Vitek Vanecek</a>.  Pick previously acquired by Washington from Winnipeg with  round 2 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=238267'>Seamus Casey</a>) for  <a href='/ihdb/stats/pdisplay.php?pid=106892'>Brenden Dillon</a>. " class="l">
Seattle<sup><a href="#18">18</a></sup>
</td>
<td class="l">
Winnipeg</td>
<td rel="tooltip" title="Acquired from Seattle with  round 3 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=251765'>Aydar Suniev</a>) for  <a href='/ihdb/stats/pdisplay.php?pid=155408'>Oliver Bjorkstrand</a>.  Pick previously acquired by Seattle from Winnipeg  for  <a href='/ihdb/stats/pdisplay.php?pid=177777'>Mason Appleton</a>. " class="l">
Columbus<sup><a href="#48">48</a></sup>
</td>
<td class="l">
Winnipeg</td>
<td rel="tooltip" title="Acquired from Winnipeg with  <a href='/ihdb/stats/pdisplay.php?pid=134193'>Andrew Copp</a> for  <a href='/ihdb/stats/pdisplay.php?pid=196572'>Morgan Barron</a>, round 1 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=230223'>Brad Lambert</a>), round 2 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=238776'>Elias Salomonsson</a>) and round 5 pick in the 2023 draft. " class="l">
NY Rangers<sup><a href="#69">69</a></sup>
</td>
<td class="l">
Winnipeg</td>
</tr>
<tr>
<td>19</td>
<td rel="tooltip" title="Acquired from Tampa Bay with  <a href='/ihdb/stats/pdisplay.php?pid=177601'>Taylor Raddysh</a>, <a href='/ihdb/stats/pdisplay.php?pid=177578'>Boris Katchouk</a> and round 1 pick in the 2024 draft for  <a href='/ihdb/stats/pdisplay.php?pid=178965'>Brandon Hagel</a>, round 4 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=232201'>Kenny Connors</a>) and round 4 pick in the 2024 draft. " class="l">
Chicago<sup><a href="#3">3</a></sup>
</td>
<td rel="tooltip" title="Acquired from Tampa Bay with  <a href='/ihdb/stats/pdisplay.php?pid=107053'>Tyler Johnson</a> for  <a href='/ihdb/stats/pdisplay.php?pid=55395'>Brent Seabrook</a>. " class="l">
Chicago<sup><a href="#19">19</a></sup>
</td>
<td rel="tooltip" title="Acquired from Tampa Bay with  <a href='/ihdb/stats/pdisplay.php?pid=179662'>Cal Foote</a>, round 4 pick in the 2023 draft, round 5 pick in the 2023 draft, round 2 pick in the 2024 draft and round 1 pick in the 2025 draft for  <a href='/ihdb/stats/pdisplay.php?pid=174618'>Tanner Jeannot</a>. " class="l">
Nashville<sup><a href="#34">34</a></sup>
</td>
<td rel="tooltip" title="Acquired from Nashville  for  round 4 pick in the 2024 draft.  Pick previously acquired by Nashville from Tampa Bay with  <a href='/ihdb/stats/pdisplay.php?pid=179662'>Cal Foote</a>, round 3 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=248055'>Dylan MacKinnon</a>), round 5 pick in the 2023 draft, round 2 pick in the 2024 draft and round 1 pick in the 2025 draft for  <a href='/ihdb/stats/pdisplay.php?pid=174618'>Tanner Jeannot</a>. " class="l">
Tampa Bay<sup><a href="#49">49</a></sup>
</td>
<td rel="tooltip" title="Acquired from Nashville with  round 2 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=248119'>Brady Cleveland</a>) for  round 2 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=249110'>Felix Nilsson</a>).  Pick previously acquired by Nashville from Tampa Bay with  <a href='/ihdb/stats/pdisplay.php?pid=179662'>Cal Foote</a>, round 3 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=248055'>Dylan MacKinnon</a>), round 4 pick in the 2023 draft, round 2 pick in the 2024 draft and round 1 pick in the 2025 draft for  <a href='/ihdb/stats/pdisplay.php?pid=174618'>Tanner Jeannot</a>. " class="l">
Detroit<sup><a href="#59">59</a></sup>
</td>
<td class="l">
Tampa Bay</td>
<td class="l">
Tampa Bay</td>
</tr>
<tr>
<td>20</td>
<td class="l">
Seattle</td>
<td class="l">
Seattle</td>
<td class="l">
Seattle</td>
<td class="l">
Seattle</td>
<td class="l">
Seattle</td>
<td class="l">
Seattle</td>
<td class="l">
Seattle</td>
</tr>
<tr>
<td>21</td>
<td class="l">
Minnesota</td>
<td class="l">
Minnesota</td>
<td rel="tooltip" title="Acquired from Minnesota  for  <a href='/ihdb/stats/pdisplay.php?pid=106623'>Nicolas Deslauriers</a>. " class="l">
Anaheim<sup><a href="#35">35</a></sup>
</td>
<td rel="tooltip" title="Acquired from Minnesota  for  <a href='/ihdb/stats/pdisplay.php?pid=155343'>Oskar Sundqvist</a>. " class="l">
Detroit<sup><a href="#50">50</a></sup>
</td>
<td class="l">
Minnesota</td>
<td class="l">
Minnesota</td>
<td class="l">
Minnesota</td>
</tr>
<tr>
<td>22</td>
<td rel="tooltip" title="Acquired from Columbus with  round 2 pick in the 2024 draft for  <a href='/ihdb/stats/pdisplay.php?pid=112494'>Kevin Connauton</a>.  Pick previously acquired by Columbus from Los Angeles with  <a href='/ihdb/stats/pdisplay.php?pid=87893'>Jonathan Quick</a> and round 3 pick in the 2024 draft for  <a href='/ihdb/stats/pdisplay.php?pid=180637'>Vladislav Gavrikov</a> and <a href='/ihdb/stats/pdisplay.php?pid=155337'>Joonas Korpisalo</a>. " class="l">
Philadelphia<sup><a href="#4">4</a></sup>
</td>
<td class="l">
Los Angeles</td>
<td rel="tooltip" title="Acquired from Los Angeles  for  rights to <a href='/ihdb/stats/pdisplay.php?pid=225158'>Erik Portillo</a>. " class="l">
Buffalo<sup><a href="#36">36</a></sup>
</td>
<td class="l">
Los Angeles</td>
<td class="l">
Los Angeles</td>
<td class="l">
Los Angeles</td>
<td rel="tooltip" title="Acquired from Los Angeles  for  round 7 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=220295'>Kaleb Lawrence</a>). " class="l">
Boston<sup><a href="#75">75</a></sup>
</td>
</tr>
<tr>
<td>23</td>
<td class="l">
NY Rangers</td>
<td rel="tooltip" title="Acquired from NY Rangers with  <a href='/ihdb/stats/pdisplay.php?pid=131014'>Andy Welinski</a> and round 4 pick in the 2025 draft for  <a href='/ihdb/stats/pdisplay.php?pid=186637'>Cooper Zech</a>. " class="l">
Chicago<sup><a href="#20">20</a></sup>
</td>
<td rel="tooltip" title="Acquired from NY Rangers  for  <a href='/ihdb/stats/pdisplay.php?pid=85051'>Justin Braun</a>. " class="l">
Philadelphia<sup><a href="#37">37</a></sup>
</td>
<td rel="tooltip" title="Acquired from NY Rangers  for  <a href='/ihdb/stats/pdisplay.php?pid=145528'>Tyler Motte</a>. " class="l">
Vancouver<sup><a href="#51">51</a></sup>
</td>
<td rel="tooltip" title="Acquired from NY Rangers with  <a href='/ihdb/stats/pdisplay.php?pid=196572'>Morgan Barron</a>, round 1 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=230223'>Brad Lambert</a>) and round 2 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=238776'>Elias Salomonsson</a>) for  <a href='/ihdb/stats/pdisplay.php?pid=134193'>Andrew Copp</a> and round 6 pick in the 2023 draft. " class="l">
Winnipeg<sup><a href="#60">60</a></sup>
</td>
<td class="l">
NY Rangers</td>
<td rel="tooltip" title="Acquired from NY Rangers with  <a href='/ihdb/stats/pdisplay.php?pid=169587'>Julien Gauthier</a> for  <a href='/ihdb/stats/pdisplay.php?pid=145528'>Tyler Motte</a>. " class="l">
Ottawa<sup><a href="#76">76</a></sup>
</td>
</tr>
<tr>
<td>24</td>
<td rel="tooltip" title="Acquired from Edmonton with  <a href='/ihdb/stats/pdisplay.php?pid=226598'>Reid Schaefer</a>, <a href='/ihdb/stats/pdisplay.php?pid=99406'>Tyson Barrie</a> and round 4 pick in the 2024 draft for  <a href='/ihdb/stats/pdisplay.php?pid=112754'>Mattias Ekholm</a> and round 6 pick in the 2024 draft. " class="l">
Nashville<sup><a href="#5">5</a></sup>
</td>
<td class="l">
Edmonton</td>
<td rel="tooltip" title="Acquired from Edmonton with  <a href='/ihdb/stats/pdisplay.php?pid=213346'>Michael Kesselring</a> for  <a href='/ihdb/stats/pdisplay.php?pid=181810'>Cam Dineen</a> and <a href='/ihdb/stats/pdisplay.php?pid=127782'>Nick Bjugstad</a>. " class="l">
Arizona<sup><a href="#38">38</a></sup>
</td>
<td rel="tooltip" title="Acquired from Edmonton  for  <a href='/ihdb/stats/pdisplay.php?pid=77446'>Derick Brassard</a>. " class="l">
Philadelphia<sup><a href="#52">52</a></sup>
</td>
<td rel="tooltip" title="Acquired from Edmonton  for  rights to <a href='/ihdb/stats/pdisplay.php?pid=227537'>Jayden Grubbe</a>. " class="l">
NY Rangers<sup><a href="#61">61</a></sup>
</td>
<td class="l">
Edmonton</td>
<td class="l">
Edmonton</td>
</tr>
<tr>
<td>25</td>
<td rel="tooltip" title="Acquired from Toronto with  <a href='/ihdb/stats/pdisplay.php?pid=177644'>Adam Gaudette</a>, <a href='/ihdb/stats/pdisplay.php?pid=216515'>Mikhail Abramov</a>, round 3 pick in the 2023 draft and round 2 pick in the 2024 draft for  <a href='/ihdb/stats/pdisplay.php?pid=160732'>Noel Acciari</a>. " class="l">
St. Louis<sup><a href="#6">6</a></sup>
</td>
<td rel="tooltip" title="Acquired from Toronto with  round 2 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=250995'>Niklas Kokko</a>) and round 3 pick in the 2024 draft for  <a href='/ihdb/stats/pdisplay.php?pid=143113'>Colin Blackwell</a> and <a href='/ihdb/stats/pdisplay.php?pid=71812'>Mark Giordano</a>. " class="l">
Seattle<sup><a href="#21">21</a></sup>
</td>
<td rel="tooltip" title="Acquired from Toronto  for  <a href='/ihdb/stats/pdisplay.php?pid=89981'>Luke Schenn</a>. " class="l">
Vancouver<sup><a href="#39">39</a></sup>
</td>
<td rel="tooltip" title="Acquired from Toronto  for  round 4 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=223784'>Dennis Hildeby</a>). " class="l">
Nashville<sup><a href="#53">53</a></sup>
</td>
<td class="l">
Toronto</td>
<td class="l">
Toronto</td>
<td rel="tooltip" title="Acquired from Toronto with  <a href='/ihdb/stats/pdisplay.php?pid=200224'>Filip Hallander</a> for  <a href='/ihdb/stats/pdisplay.php?pid=160292'>Jared McCann</a>. " class="l">
Pittsburgh<sup><a href="#77">77</a></sup>
</td>
</tr>
<tr>
<td>26</td>
<td rel="tooltip" title="Acquired from New Jersey with  <a href='/ihdb/stats/pdisplay.php?pid=208491'>Nikita Okhotyuk</a>, <a href='/ihdb/stats/pdisplay.php?pid=192064'>Fabian Zetterlund</a>, <a href='/ihdb/stats/pdisplay.php?pid=164475'>Andreas Johnsson</a>, <a href='/ihdb/stats/pdisplay.php?pid=225854'>Shakir Mukhamadullin</a>, round 1 pick in the 2024 draft and round 7 pick in the 2024 draft for  <a href='/ihdb/stats/pdisplay.php?pid=225177'>Santeri Hatakka</a>, <a href='/ihdb/stats/pdisplay.php?pid=225172'>Timur Ibragimov</a>, <a href='/ihdb/stats/pdisplay.php?pid=200341'>Zachary Emond</a>, <a href='/ihdb/stats/pdisplay.php?pid=169615'>Timo Meier</a>, <a href='/ihdb/stats/pdisplay.php?pid=121787'>Scott Harrington</a> and round 5 pick in the 2024 draft. " class="l">
San Jose<sup><a href="#7">7</a></sup>
</td>
<td class="l">
New Jersey</td>
<td rel="tooltip" title="Acquired from Pittsburgh  for  round 3 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=266360'>Emil Pieniniemi</a>) and round 7 pick in the 2024 draft.  Pick previously acquired by Pittsburgh from New Jersey with  <a href='/ihdb/stats/pdisplay.php?pid=187361'>Ty Smith</a> for  <a href='/ihdb/stats/pdisplay.php?pid=174819'>John Marino</a>. " class="l">
NY Rangers<sup><a href="#40">40</a></sup>
</td>
<td class="l">
New Jersey</td>
<td class="l">
New Jersey</td>
<td class="l">
New Jersey</td>
<td rel="tooltip" title="Acquired from New Jersey." class="l">
Nashville<sup><a href="#78">78</a></sup>
</td>
</tr>
<tr>
<td>27</td>
<td class="l">
Colorado</td>
<td rel="tooltip" title="Acquired from Colorado with  <a href='/ihdb/stats/pdisplay.php?pid=209478'>Drew Helleson</a> for  <a href='/ihdb/stats/pdisplay.php?pid=118989'>Josh Manson</a>. " class="l">
Anaheim<sup><a href="#22">22</a></sup>
</td>
<td rel="tooltip" title="Acquired from NY Rangers with  round 7 pick in the 2024 draft for  round 3 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=248122'>Drew Fortescue</a>).  Pick previously acquired by NY Rangers from Colorado with  round 3 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=248730'>Bryce McConnell-Barker</a>) and round 5 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=241047'>Maxim Barbashev</a>) for  <a href='/ihdb/stats/pdisplay.php?pid=181052'>Alexandar Georgiev</a>. " class="l">
Pittsburgh<sup><a href="#41">41</a></sup>
</td>
<td rel="tooltip" title="Acquired from Colorado  for  <a href='/ihdb/stats/pdisplay.php?pid=145066'>Kurtis MacDermid</a>. " class="l">
Seattle<sup><a href="#54">54</a></sup>
</td>
<td class="l">
Colorado</td>
<td class="l">
Colorado</td>
<td class="l">
Colorado</td>
</tr>
<tr>
<td>28</td>
<td rel="tooltip" title="Acquired from Washington with  <a href='/ihdb/stats/pdisplay.php?pid=144637'>Erik Gustafsson</a> for  <a href='/ihdb/stats/pdisplay.php?pid=207946'>Rasmus Sandin</a>.  Pick previously acquired by Washington from Boston with  <a href='/ihdb/stats/pdisplay.php?pid=99554'>Craig Smith</a>, round 3 pick in the 2024 draft and round 2 pick in the 2025 draft for  rights to <a href='/ihdb/stats/pdisplay.php?pid=185641'>Andrei Svetlakov</a> and <a href='/ihdb/stats/pdisplay.php?pid=131779'>Garnet Hathaway</a>. " class="l">
Toronto<sup><a href="#8">8</a></sup>
</td>
<td rel="tooltip" title="Acquired from Boston with  <a href='/ihdb/stats/pdisplay.php?pid=191102'>Urho Vaakanainen</a>, <a href='/ihdb/stats/pdisplay.php?pid=107544'>John Moore</a>, round 1 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=227320'>Nathan Gaucher</a>) and round 2 pick in the 2024 draft for  <a href='/ihdb/stats/pdisplay.php?pid=152875'>Hampus Lindholm</a> and <a href='/ihdb/stats/pdisplay.php?pid=101547'>Kodie Curran</a>. " class="l">
Anaheim<sup><a href="#23">23</a></sup>
</td>
<td class="l">
Boston</td>
<td class="l">
Boston</td>
<td rel="tooltip" title="Acquired from Minnesota  for  <a href='/ihdb/stats/pdisplay.php?pid=113830'>Gustav Nyquist</a>.  Pick previously acquired by Minnesota from Boston  for  <a href='/ihdb/stats/pdisplay.php?pid=106574'>Dmitri Orlov</a>. " class="l">
Columbus<sup><a href="#62">62</a></sup>
</td>
<td class="l">
Boston</td>
<td class="l">
Boston</td>
</tr>
<tr>
<td>29</td>
<td rel="tooltip" title="Acquired from NY Rangers with  <a href='/ihdb/stats/pdisplay.php?pid=209449'>Hunter Skinner</a>, <a href='/ihdb/stats/pdisplay.php?pid=171529'>Sammy Blais</a> and round 4 pick in the 2024 draft for  <a href='/ihdb/stats/pdisplay.php?pid=176927'>Niko Mikkola</a> and <a href='/ihdb/stats/pdisplay.php?pid=117204'>Vladimir Tarasenko</a>.  Pick previously acquired by NY Rangers from Dallas with  round 4 pick in the 2025 draft for  <a href='/ihdb/stats/pdisplay.php?pid=210202'>Nils Lundkvist</a>. " class="l">
St. Louis<sup><a href="#9">9</a></sup>
</td>
<td class="l">
Dallas</td>
<td rel="tooltip" title="Acquired from Arizona  for  round 3 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=227329'>Jeremy Langlois</a>).  Pick previously acquired by Arizona from Dallas  for  <a href='/ihdb/stats/pdisplay.php?pid=116100'>Scott Wedgewood</a>. " class="l">
Chicago<sup><a href="#42">42</a></sup>
</td>
<td class="l">
Dallas</td>
<td class="l">
Dallas</td>
<td class="l">
Dallas</td>
<td class="l">
Dallas</td>
</tr>
<tr>
<td>30</td>
<td class="l">
Carolina</td>
<td class="l">
Carolina</td>
<td rel="tooltip" title="Acquired from San Jose with  round 4 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=265435'>Alexander Rykov</a>) for  round 3 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=251494'>Brandon Svoboda</a>).  Pick previously acquired by San Jose from Carolina with  <a href='/ihdb/stats/pdisplay.php?pid=204697'>Eetu Makiniemi</a> and <a href='/ihdb/stats/pdisplay.php?pid=170262'>Steven Lorentz</a> for  <a href='/ihdb/stats/pdisplay.php?pid=170214'>Lane Pederson</a> and <a href='/ihdb/stats/pdisplay.php?pid=71733'>Brent Burns</a>. " class="l">
Carolina<sup><a href="#43">43</a></sup>
</td>
<td class="l">
Carolina</td>
<td class="l">
Carolina</td>
<td class="l">
Carolina</td>
<td class="l">
Carolina</td>
</tr>
<tr>
<td>31</td>
<td rel="tooltip" title="Acquired from Florida with  <a href='/ihdb/stats/pdisplay.php?pid=217355'>Ty Smilanic</a> and round 4 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=228933'>Cedrick Guindon</a>) for  <a href='/ihdb/stats/pdisplay.php?pid=106801'>Ben Chiarot</a>.  Pick previously acquired by Montreal from Florida with  <a href='/ihdb/stats/pdisplay.php?pid=217355'>Ty Smilanic</a> and round 4 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=228933'>Cedrick Guindon</a>) for  <a href='/ihdb/stats/pdisplay.php?pid=106801'>Ben Chiarot</a>. " class="l">
Montreal<sup><a href="#10">10</a></sup>
</td>
<td class="l">
Florida</td>
<td rel="tooltip" title="Acquired from Florida with  <a href='/ihdb/stats/pdisplay.php?pid=180592'>Owen Tippett</a> and round 1 pick in the 2024 draft for  <a href='/ihdb/stats/pdisplay.php?pid=193762'>German Rubtsov</a>, <a href='/ihdb/stats/pdisplay.php?pid=177552'>Connor Bunnaman</a>, <a href='/ihdb/stats/pdisplay.php?pid=89489'>Claude Giroux</a> and round 5 pick in the 2024 draft. " class="l">
Philadelphia<sup><a href="#44">44</a></sup>
</td>
<td class="l">
Florida</td>
<td class="l">
Florida</td>
<td class="l">
Florida</td>
<td rel="tooltip" title="Acquired from Florida  for  round 7 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=227224'>Liam Arnsby</a>). " class="l">
Pittsburgh<sup><a href="#79">79</a></sup>
</td>
</tr>
<tr>
<td>32</td>
<td class="l">
Vegas</td>
<td rel="tooltip" title="Acquired from Buffalo with  round 5 pick in the 2024 draft for  <a href='/ihdb/stats/pdisplay.php?pid=170297'>Jordan Greenway</a>.  Pick previously acquired by Buffalo from Vegas with  <a href='/ihdb/stats/pdisplay.php?pid=197782'>Peyton Krebs</a>, <a href='/ihdb/stats/pdisplay.php?pid=160632'>Alex Tuch</a> and round 1 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=244119'>Noah Ostlund</a>) for  <a href='/ihdb/stats/pdisplay.php?pid=158169'>Jack Eichel</a> and round 3 pick in the 2023 draft (<a href='/ihdb/stats/pdisplay.php?pid=248027'>Mathieu Cataford</a>). " class="l">
Minnesota<sup><a href="#24">24</a></sup>
</td>
<td class="l">
Vegas</td>
<td rel="tooltip" title="Acquired from Vegas  for  round 4 pick in the 2022 draft (<a href='/ihdb/stats/pdisplay.php?pid=235447'>Cameron Whitehead</a>). " class="l">
Montreal<sup><a href="#55">55</a></sup>
</td>
<td rel="tooltip" title="Acquired from Vegas with  <a href='/ihdb/stats/pdisplay.php?pid=62488'>Shea Weber</a> for  <a href='/ihdb/stats/pdisplay.php?pid=160201'>Dysin Mayo</a>. " class="l">
Arizona<sup><a href="#63">63</a></sup>
</td>
<td class="l">
Vegas</td>
<td rel="tooltip" title="Acquired from Vegas  for  round 7 pick in the 2024 draft. " class="l">
Columbus<sup><a href="#80">80</a></sup>
</td>
</tr>
</table>
<div style="width:850px">
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="1">1</a></sup> Acquired from Ottawa with  round 2 pick in the 2024 draft and round 2 pick in the 2026 draft for  <a href="/ihdb/stats/pdisplay.php?pid=177557">Jakob Chychrun</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="2">2</a></sup> Acquired from Vancouver with  round 2 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=249110">Felix Nilsson</a>) for  <a href="/ihdb/stats/pdisplay.php?pid=180904">Filip Hronek</a> and round 4 pick in the 2023 draft.  Pick previously acquired by Vancouver from NY Islanders with  <a href="/ihdb/stats/pdisplay.php?pid=227734">Aatu Raty</a> and <a href="/ihdb/stats/pdisplay.php?pid=169563">Anthony Beauvillier</a> for  <a href="/ihdb/stats/pdisplay.php?pid=145053">Bo Horvat</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="3">3</a></sup> Acquired from Tampa Bay with  <a href="/ihdb/stats/pdisplay.php?pid=177601">Taylor Raddysh</a>, <a href="/ihdb/stats/pdisplay.php?pid=177578">Boris Katchouk</a> and round 1 pick in the 2024 draft for  <a href="/ihdb/stats/pdisplay.php?pid=178965">Brandon Hagel</a>, round 4 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=232201">Kenny Connors</a>) and round 4 pick in the 2024 draft. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="4">4</a></sup> Acquired from Columbus with  round 2 pick in the 2024 draft for  <a href="/ihdb/stats/pdisplay.php?pid=112494">Kevin Connauton</a>.  Pick previously acquired by Columbus from Los Angeles with  <a href="/ihdb/stats/pdisplay.php?pid=87893">Jonathan Quick</a> and round 3 pick in the 2024 draft for  <a href="/ihdb/stats/pdisplay.php?pid=180637">Vladislav Gavrikov</a> and <a href="/ihdb/stats/pdisplay.php?pid=155337">Joonas Korpisalo</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="5">5</a></sup> Acquired from Edmonton with  <a href="/ihdb/stats/pdisplay.php?pid=226598">Reid Schaefer</a>, <a href="/ihdb/stats/pdisplay.php?pid=99406">Tyson Barrie</a> and round 4 pick in the 2024 draft for  <a href="/ihdb/stats/pdisplay.php?pid=112754">Mattias Ekholm</a> and round 6 pick in the 2024 draft. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="6">6</a></sup> Acquired from Toronto with  <a href="/ihdb/stats/pdisplay.php?pid=177644">Adam Gaudette</a>, <a href="/ihdb/stats/pdisplay.php?pid=216515">Mikhail Abramov</a>, round 3 pick in the 2023 draft and round 2 pick in the 2024 draft for  <a href="/ihdb/stats/pdisplay.php?pid=160732">Noel Acciari</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="7">7</a></sup> Acquired from New Jersey with  <a href="/ihdb/stats/pdisplay.php?pid=208491">Nikita Okhotyuk</a>, <a href="/ihdb/stats/pdisplay.php?pid=192064">Fabian Zetterlund</a>, <a href="/ihdb/stats/pdisplay.php?pid=164475">Andreas Johnsson</a>, <a href="/ihdb/stats/pdisplay.php?pid=225854">Shakir Mukhamadullin</a>, round 1 pick in the 2024 draft and round 7 pick in the 2024 draft for  <a href="/ihdb/stats/pdisplay.php?pid=225177">Santeri Hatakka</a>, <a href="/ihdb/stats/pdisplay.php?pid=225172">Timur Ibragimov</a>, <a href="/ihdb/stats/pdisplay.php?pid=200341">Zachary Emond</a>, <a href="/ihdb/stats/pdisplay.php?pid=169615">Timo Meier</a>, <a href="/ihdb/stats/pdisplay.php?pid=121787">Scott Harrington</a> and round 5 pick in the 2024 draft. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="8">8</a></sup> Acquired from Washington with  <a href="/ihdb/stats/pdisplay.php?pid=144637">Erik Gustafsson</a> for  <a href="/ihdb/stats/pdisplay.php?pid=207946">Rasmus Sandin</a>.  Pick previously acquired by Washington from Boston with  <a href="/ihdb/stats/pdisplay.php?pid=99554">Craig Smith</a>, round 3 pick in the 2024 draft and round 2 pick in the 2025 draft for  rights to <a href="/ihdb/stats/pdisplay.php?pid=185641">Andrei Svetlakov</a> and <a href="/ihdb/stats/pdisplay.php?pid=131779">Garnet Hathaway</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="9">9</a></sup> Acquired from NY Rangers with  <a href="/ihdb/stats/pdisplay.php?pid=209449">Hunter Skinner</a>, <a href="/ihdb/stats/pdisplay.php?pid=171529">Sammy Blais</a> and round 4 pick in the 2024 draft for  <a href="/ihdb/stats/pdisplay.php?pid=176927">Niko Mikkola</a> and <a href="/ihdb/stats/pdisplay.php?pid=117204">Vladimir Tarasenko</a>.  Pick previously acquired by NY Rangers from Dallas with  round 4 pick in the 2025 draft for  <a href="/ihdb/stats/pdisplay.php?pid=210202">Nils Lundkvist</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="10">10</a></sup> Acquired from Florida with  <a href="/ihdb/stats/pdisplay.php?pid=217355">Ty Smilanic</a> and round 4 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=228933">Cedrick Guindon</a>) for  <a href="/ihdb/stats/pdisplay.php?pid=106801">Ben Chiarot</a>.  Pick previously acquired by Montreal from Florida with  <a href="/ihdb/stats/pdisplay.php?pid=217355">Ty Smilanic</a> and round 4 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=228933">Cedrick Guindon</a>) for  <a href="/ihdb/stats/pdisplay.php?pid=106801">Ben Chiarot</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="11">11</a></sup> Acquired from Colorado  for  <a href="/ihdb/stats/pdisplay.php?pid=177637">Ross Colton</a>.  Pick previously acquired by Colorado from Montreal with  <a href="/ihdb/stats/pdisplay.php?pid=192904">Gianni Fairbrother</a> and round 1 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=260632">Mikhail Gulyayev</a>) for  <a href="/ihdb/stats/pdisplay.php?pid=200446">Alex Newhook</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="12">12</a></sup> Acquired from Philadelphia with  <a href="/ihdb/stats/pdisplay.php?pid=161943">Robert Hagg</a> and round 1 pick in the 2021 draft (<a href="/ihdb/stats/pdisplay.php?pid=233734">Isak Rosen</a>) for  <a href="/ihdb/stats/pdisplay.php?pid=139048">Rasmus Ristolainen</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="13">13</a></sup> Acquired from St. Louis with  <a href="/ihdb/stats/pdisplay.php?pid=169430">Jake Walman</a> and <a href="/ihdb/stats/pdisplay.php?pid=155343">Oskar Sundqvist</a> for  <a href="/ihdb/stats/pdisplay.php?pid=107582">Luke Witkowski</a> and <a href="/ihdb/stats/pdisplay.php?pid=119093">Nick Leddy</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="14">14</a></sup> Acquired from Detroit  for  round 2 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=248119">Brady Cleveland</a>) and round 5 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=264300">Kevin Bicker</a>).  Pick previously acquired by Detroit from Vancouver with  round 1 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=249530">Axel Sandin-Pellika</a>) for  <a href="/ihdb/stats/pdisplay.php?pid=180904">Filip Hronek</a> and round 4 pick in the 2023 draft. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="15">15</a></sup> Acquired from Ottawa with  <a href="/ihdb/stats/pdisplay.php?pid=122837">Nikita Zaitsev</a> and round 4 pick in the 2026 draft for  future considerations. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="16">16</a></sup> Acquired from Pittsburgh  for  <a href="/ihdb/stats/pdisplay.php?pid=118389">Mikael Granlund</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="17">17</a></sup> Acquired from Nashville with  round 5 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=264300">Kevin Bicker</a>) for  round 2 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=249110">Felix Nilsson</a>). </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="18">18</a></sup> Acquired from Washington  for  <a href="/ihdb/stats/pdisplay.php?pid=171229">Vitek Vanecek</a>.  Pick previously acquired by Washington from Winnipeg with  round 2 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=238267">Seamus Casey</a>) for  <a href="/ihdb/stats/pdisplay.php?pid=106892">Brenden Dillon</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="19">19</a></sup> Acquired from Tampa Bay with  <a href="/ihdb/stats/pdisplay.php?pid=107053">Tyler Johnson</a> for  <a href="/ihdb/stats/pdisplay.php?pid=55395">Brent Seabrook</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="20">20</a></sup> Acquired from NY Rangers with  <a href="/ihdb/stats/pdisplay.php?pid=131014">Andy Welinski</a> and round 4 pick in the 2025 draft for  <a href="/ihdb/stats/pdisplay.php?pid=186637">Cooper Zech</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="21">21</a></sup> Acquired from Toronto with  round 2 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=250995">Niklas Kokko</a>) and round 3 pick in the 2024 draft for  <a href="/ihdb/stats/pdisplay.php?pid=143113">Colin Blackwell</a> and <a href="/ihdb/stats/pdisplay.php?pid=71812">Mark Giordano</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="22">22</a></sup> Acquired from Colorado with  <a href="/ihdb/stats/pdisplay.php?pid=209478">Drew Helleson</a> for  <a href="/ihdb/stats/pdisplay.php?pid=118989">Josh Manson</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="23">23</a></sup> Acquired from Boston with  <a href="/ihdb/stats/pdisplay.php?pid=191102">Urho Vaakanainen</a>, <a href="/ihdb/stats/pdisplay.php?pid=107544">John Moore</a>, round 1 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=227320">Nathan Gaucher</a>) and round 2 pick in the 2024 draft for  <a href="/ihdb/stats/pdisplay.php?pid=152875">Hampus Lindholm</a> and <a href="/ihdb/stats/pdisplay.php?pid=101547">Kodie Curran</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="24">24</a></sup> Acquired from Buffalo with  round 5 pick in the 2024 draft for  <a href="/ihdb/stats/pdisplay.php?pid=170297">Jordan Greenway</a>.  Pick previously acquired by Buffalo from Vegas with  <a href="/ihdb/stats/pdisplay.php?pid=197782">Peyton Krebs</a>, <a href="/ihdb/stats/pdisplay.php?pid=160632">Alex Tuch</a> and round 1 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=244119">Noah Ostlund</a>) for  <a href="/ihdb/stats/pdisplay.php?pid=158169">Jack Eichel</a> and round 3 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=248027">Mathieu Cataford</a>). </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="25">25</a></sup> Acquired from San Jose with  <a href="/ihdb/stats/pdisplay.php?pid=187532">John Leonard</a> for  <a href="/ihdb/stats/pdisplay.php?pid=170310">Luke Kunin</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="26">26</a></sup> Acquired from Carolina  for  round 3 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=247723">Jayden Perron</a>) and round 4 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=265435">Alexander Rykov</a>).  Pick previously acquired by Carolina from Philadelphia with  round 4 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=238781">Simon Forsmark</a>) and round 2 pick in the 2024 draft for  <a href="/ihdb/stats/pdisplay.php?pid=130876">Tony DeAngelo</a> and round 7 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=235308">Alexis Gendron</a>). </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="27">27</a></sup> Acquired from Washington  for  <a href="/ihdb/stats/pdisplay.php?pid=127786">Johan Larsson</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="28">28</a></sup> Acquired from Toronto with  <a href="/ihdb/stats/pdisplay.php?pid=177644">Adam Gaudette</a>, <a href="/ihdb/stats/pdisplay.php?pid=216515">Mikhail Abramov</a>, round 1 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=248005">Otto Stenberg</a>) and round 2 pick in the 2024 draft for  <a href="/ihdb/stats/pdisplay.php?pid=160732">Noel Acciari</a>.  Pick previously acquired by Toronto from Ottawa with  <a href="/ihdb/stats/pdisplay.php?pid=130608">Matt Murray</a> and round 7 pick in the 2024 draft for  future considerations. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="29">29</a></sup> Acquired from Buffalo with  <a href="/ihdb/stats/pdisplay.php?pid=158169">Jack Eichel</a> for  <a href="/ihdb/stats/pdisplay.php?pid=197782">Peyton Krebs</a>, <a href="/ihdb/stats/pdisplay.php?pid=160632">Alex Tuch</a>, round 1 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=244119">Noah Ostlund</a>) and round 2 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=241129">Riley Heidt</a>). </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="30">30</a></sup> Acquired from Pittsburgh with  round 3 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=223811">Lucas Edmonds</a>) for  <a href="/ihdb/stats/pdisplay.php?pid=59691">Jeff Carter</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="31">31</a></sup> Acquired from Nashville  for  round 3 pick in the 2024 draft and round 6 pick in the 2024 draft. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="32">32</a></sup> Acquired from New Jersey with  <a href="/ihdb/stats/pdisplay.php?pid=207017">Yegor Sharangovich</a> for  <a href="/ihdb/stats/pdisplay.php?pid=115633">Tyler Toffoli</a>.  Pick previously acquired by New Jersey from Columbus  for  <a href="/ihdb/stats/pdisplay.php?pid=124610">Damon Severson</a>.  Pick previously acquired by Columbus from Seattle with  round 4 pick in the 2023 draft for  <a href="/ihdb/stats/pdisplay.php?pid=155408">Oliver Bjorkstrand</a>.  Pick previously acquired by Seattle from Calgary with  round 2 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=239056">David Goyette</a>) and round 7 pick in the 2024 draft for  <a href="/ihdb/stats/pdisplay.php?pid=127561">Calle Jarnkrok</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="33">33</a></sup> Acquired from NY Islanders with  <a href="/ihdb/stats/pdisplay.php?pid=62622">Andrew Ladd</a>, round 2 pick in the 2021 draft (<a href="/ihdb/stats/pdisplay.php?pid=213738">J.J. Moser</a>) and round 2 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=244129">Mattias Havelid</a>) for  future considerations. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="34">34</a></sup> Acquired from Tampa Bay with  <a href="/ihdb/stats/pdisplay.php?pid=179662">Cal Foote</a>, round 4 pick in the 2023 draft, round 5 pick in the 2023 draft, round 2 pick in the 2024 draft and round 1 pick in the 2025 draft for  <a href="/ihdb/stats/pdisplay.php?pid=174618">Tanner Jeannot</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="35">35</a></sup> Acquired from Minnesota  for  <a href="/ihdb/stats/pdisplay.php?pid=106623">Nicolas Deslauriers</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="36">36</a></sup> Acquired from Los Angeles  for  rights to <a href="/ihdb/stats/pdisplay.php?pid=225158">Erik Portillo</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="37">37</a></sup> Acquired from NY Rangers  for  <a href="/ihdb/stats/pdisplay.php?pid=85051">Justin Braun</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="38">38</a></sup> Acquired from Edmonton with  <a href="/ihdb/stats/pdisplay.php?pid=213346">Michael Kesselring</a> for  <a href="/ihdb/stats/pdisplay.php?pid=181810">Cam Dineen</a> and <a href="/ihdb/stats/pdisplay.php?pid=127782">Nick Bjugstad</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="39">39</a></sup> Acquired from Toronto  for  <a href="/ihdb/stats/pdisplay.php?pid=89981">Luke Schenn</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="40">40</a></sup> Acquired from Pittsburgh  for  round 3 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=266360">Emil Pieniniemi</a>) and round 7 pick in the 2024 draft.  Pick previously acquired by Pittsburgh from New Jersey with  <a href="/ihdb/stats/pdisplay.php?pid=187361">Ty Smith</a> for  <a href="/ihdb/stats/pdisplay.php?pid=174819">John Marino</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="41">41</a></sup> Acquired from NY Rangers with  round 7 pick in the 2024 draft for  round 3 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=248122">Drew Fortescue</a>).  Pick previously acquired by NY Rangers from Colorado with  round 3 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=248730">Bryce McConnell-Barker</a>) and round 5 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=241047">Maxim Barbashev</a>) for  <a href="/ihdb/stats/pdisplay.php?pid=181052">Alexandar Georgiev</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="42">42</a></sup> Acquired from Arizona  for  round 3 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=227329">Jeremy Langlois</a>).  Pick previously acquired by Arizona from Dallas  for  <a href="/ihdb/stats/pdisplay.php?pid=116100">Scott Wedgewood</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="43">43</a></sup> Acquired from San Jose with  round 4 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=265435">Alexander Rykov</a>) for  round 3 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=251494">Brandon Svoboda</a>).  Pick previously acquired by San Jose from Carolina with  <a href="/ihdb/stats/pdisplay.php?pid=204697">Eetu Makiniemi</a> and <a href="/ihdb/stats/pdisplay.php?pid=170262">Steven Lorentz</a> for  <a href="/ihdb/stats/pdisplay.php?pid=170214">Lane Pederson</a> and <a href="/ihdb/stats/pdisplay.php?pid=71733">Brent Burns</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="44">44</a></sup> Acquired from Florida with  <a href="/ihdb/stats/pdisplay.php?pid=180592">Owen Tippett</a> and round 1 pick in the 2024 draft for  <a href="/ihdb/stats/pdisplay.php?pid=193762">German Rubtsov</a>, <a href="/ihdb/stats/pdisplay.php?pid=177552">Connor Bunnaman</a>, <a href="/ihdb/stats/pdisplay.php?pid=89489">Claude Giroux</a> and round 5 pick in the 2024 draft. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="45">45</a></sup> Acquired from San Jose with  round 3 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=247723">Jayden Perron</a>) for  round 3 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=251494">Brandon Svoboda</a>). </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="46">46</a></sup> Acquired from Detroit with  <a href="/ihdb/stats/pdisplay.php?pid=180904">Filip Hronek</a> for  round 1 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=249530">Axel Sandin-Pellika</a>) and round 2 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=249110">Felix Nilsson</a>). </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="47">47</a></sup> Acquired from Pittsburgh with  <a href="/ihdb/stats/pdisplay.php?pid=145514">Mike Matheson</a> for  <a href="/ihdb/stats/pdisplay.php?pid=191764">Ryan Poehling</a> and <a href="/ihdb/stats/pdisplay.php?pid=94006">Jeff Petry</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="48">48</a></sup> Acquired from Seattle with  round 3 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=251765">Aydar Suniev</a>) for  <a href="/ihdb/stats/pdisplay.php?pid=155408">Oliver Bjorkstrand</a>.  Pick previously acquired by Seattle from Winnipeg  for  <a href="/ihdb/stats/pdisplay.php?pid=177777">Mason Appleton</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="49">49</a></sup> Acquired from Nashville  for  round 4 pick in the 2024 draft.  Pick previously acquired by Nashville from Tampa Bay with  <a href="/ihdb/stats/pdisplay.php?pid=179662">Cal Foote</a>, round 3 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=248055">Dylan MacKinnon</a>), round 5 pick in the 2023 draft, round 2 pick in the 2024 draft and round 1 pick in the 2025 draft for  <a href="/ihdb/stats/pdisplay.php?pid=174618">Tanner Jeannot</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="50">50</a></sup> Acquired from Minnesota  for  <a href="/ihdb/stats/pdisplay.php?pid=155343">Oskar Sundqvist</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="51">51</a></sup> Acquired from NY Rangers  for  <a href="/ihdb/stats/pdisplay.php?pid=145528">Tyler Motte</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="52">52</a></sup> Acquired from Edmonton  for  <a href="/ihdb/stats/pdisplay.php?pid=77446">Derick Brassard</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="53">53</a></sup> Acquired from Toronto  for  round 4 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=223784">Dennis Hildeby</a>). </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="54">54</a></sup> Acquired from Colorado  for  <a href="/ihdb/stats/pdisplay.php?pid=145066">Kurtis MacDermid</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="55">55</a></sup> Acquired from Vegas  for  round 4 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=235447">Cameron Whitehead</a>). </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="56">56</a></sup> Acquired from Columbus  for  round 5 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=240671">Sergei Ivanov</a>). </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="57">57</a></sup> Acquired from Vancouver  for  <a href="/ihdb/stats/pdisplay.php?pid=164825">Ethan Bear</a> and <a href="/ihdb/stats/pdisplay.php?pid=170214">Lane Pederson</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="58">58</a></sup> Acquired from Calgary with  <a href="/ihdb/stats/pdisplay.php?pid=232198">Emil Heineman</a>, <a href="/ihdb/stats/pdisplay.php?pid=123515">Tyler Pitlick</a> and round 1 pick in the 2022 draft for  <a href="/ihdb/stats/pdisplay.php?pid=115633">Tyler Toffoli</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="59">59</a></sup> Acquired from Nashville with  round 2 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=248119">Brady Cleveland</a>) for  round 2 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=249110">Felix Nilsson</a>).  Pick previously acquired by Nashville from Tampa Bay with  <a href="/ihdb/stats/pdisplay.php?pid=179662">Cal Foote</a>, round 3 pick in the 2023 draft (<a href="/ihdb/stats/pdisplay.php?pid=248055">Dylan MacKinnon</a>), round 4 pick in the 2023 draft, round 2 pick in the 2024 draft and round 1 pick in the 2025 draft for  <a href="/ihdb/stats/pdisplay.php?pid=174618">Tanner Jeannot</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="60">60</a></sup> Acquired from NY Rangers with  <a href="/ihdb/stats/pdisplay.php?pid=196572">Morgan Barron</a>, round 1 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=230223">Brad Lambert</a>) and round 2 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=238776">Elias Salomonsson</a>) for  <a href="/ihdb/stats/pdisplay.php?pid=134193">Andrew Copp</a> and round 6 pick in the 2023 draft. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="61">61</a></sup> Acquired from Edmonton  for  rights to <a href="/ihdb/stats/pdisplay.php?pid=227537">Jayden Grubbe</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="62">62</a></sup> Acquired from Minnesota  for  <a href="/ihdb/stats/pdisplay.php?pid=113830">Gustav Nyquist</a>.  Pick previously acquired by Minnesota from Boston  for  <a href="/ihdb/stats/pdisplay.php?pid=106574">Dmitri Orlov</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="63">63</a></sup> Acquired from Vegas with  <a href="/ihdb/stats/pdisplay.php?pid=62488">Shea Weber</a> for  <a href="/ihdb/stats/pdisplay.php?pid=160201">Dysin Mayo</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="64">64</a></sup> Acquired from Columbus with  <a href="/ihdb/stats/pdisplay.php?pid=93546">Jakub Voracek</a> for  <a href="/ihdb/stats/pdisplay.php?pid=130895">Jon Gillies</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="65">65</a></sup> Acquired from Chicago  for  round 6 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=243876">Nils Juntorp</a>). </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="66">66</a></sup> Acquired from San Jose  for  <a href="/ihdb/stats/pdisplay.php?pid=162424">Mackenzie Blackwood</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="67">67</a></sup> Acquired from Washington with  <a href="/ihdb/stats/pdisplay.php?pid=169637">Daniel Sprong</a> and round 4 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=238292">Cole Spicer</a>) for  <a href="/ihdb/stats/pdisplay.php?pid=98452">Marcus Johansson</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="68">68</a></sup> Acquired from Ottawa  for  <a href="/ihdb/stats/pdisplay.php?pid=131798">Patrick Brown</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="69">69</a></sup> Acquired from Winnipeg with  <a href="/ihdb/stats/pdisplay.php?pid=134193">Andrew Copp</a> for  <a href="/ihdb/stats/pdisplay.php?pid=196572">Morgan Barron</a>, round 1 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=230223">Brad Lambert</a>), round 2 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=238776">Elias Salomonsson</a>) and round 5 pick in the 2023 draft. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="70">70</a></sup> Acquired from Anaheim with  <a href="/ihdb/stats/pdisplay.php?pid=186229">Antoine Morand</a> for  <a href="/ihdb/stats/pdisplay.php?pid=205470">Alexander Volkov</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="71">71</a></sup> Acquired from Arizona  for  <a href="/ihdb/stats/pdisplay.php?pid=84630">Anton Stralman</a>, <a href="/ihdb/stats/pdisplay.php?pid=216625">Vladislav Kolyachonok</a> and round 2 pick in the 2024 draft. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="72">72</a></sup> Acquired from Arizona  for  round 7 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=247732">Adam Zlnka</a>).  Pick previously acquired by Arizona from Vancouver with  <a href="/ihdb/stats/pdisplay.php?pid=93172">Jay Beagle</a>, <a href="/ihdb/stats/pdisplay.php?pid=97899">Antoine Roussel</a>, <a href="/ihdb/stats/pdisplay.php?pid=72639">Loui Eriksson</a>, round 1 pick in the 2021 draft (<a href="/ihdb/stats/pdisplay.php?pid=218245">Dylan Guenther</a>) and round 2 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=248624">Hunter Haight</a>) for  <a href="/ihdb/stats/pdisplay.php?pid=120283">Oliver Ekman-Larsson</a> and <a href="/ihdb/stats/pdisplay.php?pid=158171">Conor Garland</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="73">73</a></sup> Acquired from San Jose  for  round 7 pick in the 2025 draft.  Pick previously acquired by San Jose from Pittsburgh  for  <a href="/ihdb/stats/pdisplay.php?pid=200766">Tony Sund</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="74">74</a></sup> Acquired from Nashville with  <a href="/ihdb/stats/pdisplay.php?pid=160558">Brandon Fortunato</a> for  <a href="/ihdb/stats/pdisplay.php?pid=116033">Erik Gudbranson</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="75">75</a></sup> Acquired from Los Angeles  for  round 7 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=220295">Kaleb Lawrence</a>). </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="76">76</a></sup> Acquired from NY Rangers with  <a href="/ihdb/stats/pdisplay.php?pid=169587">Julien Gauthier</a> for  <a href="/ihdb/stats/pdisplay.php?pid=145528">Tyler Motte</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="77">77</a></sup> Acquired from Toronto with  <a href="/ihdb/stats/pdisplay.php?pid=200224">Filip Hallander</a> for  <a href="/ihdb/stats/pdisplay.php?pid=160292">Jared McCann</a>. </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="78">78</a></sup> Acquired from New Jersey.</div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="79">79</a></sup> Acquired from Florida  for  round 7 pick in the 2022 draft (<a href="/ihdb/stats/pdisplay.php?pid=227224">Liam Arnsby</a>). </div>
<div style="padding-left:12px; padding-top:10px; text-indent:-12px;"><sup><a id="80">80</a></sup> Acquired from Vegas  for  round 7 pick in the 2024 draft. </div>
</div>

</div><br /><div id="expand1">+</div>
Click to expand</div>
<div class="sponsor">
<div id='right_rectangle'>
<script src="/proxy/ad_proxy_300_160_360.js"></script>
</div>
</div>

<script>
if (document.documentElement.clientWidth <= 760) {
  $('#hb_black').insertBefore($('#topad'));
};
</script>


<script>

jQuery(".sponsor").each(function(){
      var $this = jQuery(this);
      $this.data('fixed', $this.offset().left); // Left value for fixed position 
      $this.data('absolute', $this.position().left); // Left value for absolute (on bottom)
}); 

jQuery(".sponsor").stick_in_parent({ spacer: false })
.on("sticky_kit:stick sticky_kit:unbottom", function(e) {
  var $el = jQuery(e.target);
  $el.css({ 'left': $el.data('fixed') });
})
.on("sticky_kit:bottom", function(e) {
  var $el = jQuery(e.target);
  $el.css({ 'left': $el.data('absolute') });
});

</script>
  <div id="footer_bar">
     <div id="footer_cell">
        <a href="/" class="revlink">Home</a> | <a href="/advertise.html" class="revlink">Advertise</a> | <a href="/feedback.html" class="revlink">Feedback</a> | <a href="/copyright.html" class="revlink">Usage</a> | <a href="/privacy.html" class="revlink">Privacy</a> | <a href="/faq.html" class="revlink">FAQ</a> | <a href="/links.html" class="revlink">Links</a> | <a href="/credits.html" class="revlink">Credits</a> | <a href="/help.html" class="revlink">Help!</a>
     </div>
     <div id="bottom_cell">
        <div style="float:left"><a href="/"><img src="/images/logo_small.gif" alt="hockeyDB.com" width="115" height="38" style="border:0;" /></a> &nbsp; &nbsp; Copyright 1998-2023 hockeyDB.com. All rights reserved.</div>
     </div>
  </div>


<!-- Start Quantcast tag -->
<script src="https://edge.quantserve.com/quant.js"></script>
<script>_qacct="p-bf8ND2mCqtl_o";quantserve();</script>
<noscript>
<a href="https://www.quantcast.com/p-bf8ND2mCqtl_o" target="_blank"><img src="https://pixel.quantserve.com/pixel/p-bf8ND2mCqtl_o.gif" style="display: none; border:0;" height="1" width="1" alt="Quantcast"/></a>
</noscript>

<!-- End Quantcast tag -->


</body>
</html>

`;

export default page;
