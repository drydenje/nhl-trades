const page = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>NHL trades for 1919-20 - NHL Trade Tracker</title>
<link href="/asset/css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/asset/js/validate.js"></script>
<script src="/asset/js/jquery-1.3.1.min.js" type="text/javascript"></script>
<script language="javascript" >
var  i=1;
var k =1;
 $(document).ready(function() {
 $(function() {
});

   
   $('#need_add_field').click(function() {
  //alert('k');
  var s ='';
 $.ajax({
  url: "/admin/ajax_team_list",
  success: function(html){
  //alert(html);
 s = html;
 
  },

  async:false
});

  var str ='<div id ="'+i+'"><table><tr><td class="admin_label">Select Team&nbsp;<select name="team['+i+']" class="s_text" ><option>Select Team </option>'+s+'</select></td><td class="admin_label">Player Acquired :<input type="text" name="player_acquired['+i+']" class="admin_text_mini" /></td><td class="admin_label">Isplayer<input type="checkbox" name="is_player['+i+']" class="admin_text_mini" value="1" /></td><td class="admin_label">HockeyDBID<input type="text" name="hockydbid['+i+']" class="admin_text_mini" /></td></tr><tr><td colspan="4"><a class="n_a" temp="'+i+'"  temp ="cool" href="javascript:void(0);" id ="n_a_'+i+'" onclick="test();" >[-]</a></td></tr></table></div>';
  $('#need_field_container').append(str);
   i++;
 
  });
  
  click_status = true;
  $('#need_add_field_edit').click(function() {
  //alert('k');
  var s ='';
 $.ajax({
  url: "/admin/ajax_team_list",
  success: function(html){
  //alert(html);
 s = html;
 if(click_status) {
 k = $('#need_add_field_edit').attr('temp');
// alert(k);
 click_status = false;
 }
 // alert(k);
 
  },

  async:false
});

  var str ='<div id ="'+k+'"><table><tr><td class="admin_label">Select Team&nbsp;<select name="team['+k+']" class="s_text" ><option>Select Team </option>'+s+'</select></td><td class="admin_label">Player Acquired :<input type="text" name="player_acquired['+k+']" class="admin_text_mini" /></td><td class="admin_label">Isplayer<input type="checkbox" name="is_player['+k+']" value="1"  /></td><td class="admin_label">HockeyDBID<input type="text" name="hockydbid['+k+']" class="admin_text_mini" /></td></tr><tr><td colspan="4"><a class="n_a_edit" temp="'+k+'"  temp ="cool" href="javascript:void(0);" id ="n_a_edit_'+k+'" onclick="test1();" >[-]</a></td></tr></table></div>';
  $('#need_field_container').append(str);
  k++;
 
  });
 
 
 });
 
 function test() {
var id = $('.n_a').attr('temp');
//alert(id);
$('#'+id).remove();
}

function test1() {
var id = $('.n_a_edit').attr('temp');
//alert(id);
$('#'+id).remove();
}
  
 </script>
</head>
<script type="text/javascript">

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-28859592-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

</script>
<body>

<!--header-->
<div id="header">
	<div id="header-inner">
  	<!--logo-->
    <div id="header-left-panel">
    	<img src="/asset/images/roy.gif" />
    </div>
	
	<div id="header-center-panel">
    	<h3 class="header_title">NHL TRADE TRACKER</h3>
	<p class="header_sub_title">History of NHL trades</p>
<p class="header_sub_title">
<!-- Place this tag where you want the +1 button to render -->
<g:plusone annotation="inline"></g:plusone>

<!-- Place this render call where appropriate -->
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script></p>
    </div>
    <!--header right panel-->
    <div id="header-right-panel">
	<img src="/asset/images/gretzky.gif" style="float:right;" />
   
    </div>
  </div></div>
<!--navigation-->
<div id="nav">
	<div id="nav-inner">
  	<ul>
    	<li><a href="/home" class="selected">Home</a></li>
      <li><a href="/user/team_list" class="">Trades by team</a></li>
      <li><a href="/user/player_list" class="">Trades by player</a></li>
      <li><a href="/user/GM_list" class="">Trades by GM</a></li>
      <li><a href="/user/notable_trade_list" class="">Notable deals</a></li>
      <li><a href="/user/biggest_trade_list" class="">Biggest trades</a></li>
      <li><a href="/user/worst_trade_list" class="">Worst trades</a></li>
    </ul>
  </div>
</div>
<!--content-->
<div id="content-area">

	<div id="content-inner">
<div id="publicityL">
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Skyscraper -->
<ins class="adsbygoogle"
     style="display:inline-block;width:160px;height:600px"
     data-ad-client="ca-pub-1410014940782819"
     data-ad-slot="4811248883"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
    </div>
  	<div id="wrapper">
      <div class="sidebar">
      	<!--block 1-->
        <div class="block">
        	
<h3 class="trade_list">TRADES BY SEASON</h3>
<table class="s_list">

<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2022-23/1" >2022-23</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2021-22/1" >2021-22</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2020-21/1" >2020-21</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2019-20/1" >2019-20</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2018-19/1" >2018-19</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2017-18/1" >2017-18</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2016-17/1" >2016-17</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2015-16/1" >2015-16</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2014-15/1" >2014-15</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2013-14/1" >2013-14</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2012-13/1" >2012-13</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2011-12/1" >2011-12</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2010-11/1" >2010-11</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2009-10/1" >2009-10</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2008-09/1" >2008-09</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2007-08/1" >2007-08</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2006-07/1" >2006-07</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2005-06/1" >2005-06</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2004-05/1" >2004-05</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2003-04/1" >2003-04</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2002-03/1" >2002-03</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2001-02/1" >2001-02</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/2000-01/1" >2000-01</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1999-00/1" >1999-00</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1998-99/1" >1998-99</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1997-98/1" >1997-98</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1996-97/1" >1996-97</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1995-96/1" >1995-96</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1994-95/1" >1994-95</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1993-94/1" >1993-94</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1992-93/1" >1992-93</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1991-92/1" >1991-92</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1990-91/1" >1990-91</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1989-90/1" >1989-90</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1988-89/1" >1988-89</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1987-88/1" >1987-88</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1986-87/1" >1986-87</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1985-86/1" >1985-86</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1984-85/1" >1984-85</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1983-84/1" >1983-84</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1982-83/1" >1982-83</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1981-82/1" >1981-82</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1980-81/1" >1980-81</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1979-80/1" >1979-80</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1978-79/1" >1978-79</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1977-78/1" >1977-78</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1976-77/1" >1976-77</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1975-76/1" >1975-76</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1974-75/1" >1974-75</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1973-74/1" >1973-74</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1972-73/1" >1972-73</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1971-72/1" >1971-72</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1970-71/1" >1970-71</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1969-70/1" >1969-70</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1968-69/1" >1968-69</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1967-68/1" >1967-68</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1966-67/1" >1966-67</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1965-66/1" >1965-66</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1964-65/1" >1964-65</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1963-64/1" >1963-64</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1962-63/1" >1962-63</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1961-62/1" >1961-62</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1960-61/1" >1960-61</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1959-60/1" >1959-60</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1958-59/1" >1958-59</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1957-58/1" >1957-58</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1956-57/1" >1956-57</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1955-56/1" >1955-56</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1954-55/1" >1954-55</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1953-54/1" >1953-54</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1952-53/1" >1952-53</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1951-52/1" >1951-52</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1950-51/1" >1950-51</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1949-50/1" >1949-50</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1948-49/1" >1948-49</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1947-48/1" >1947-48</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1946-47/1" >1946-47</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1945-46/1" >1945-46</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1944-45/1" >1944-45</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1943-44/1" >1943-44</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1942-43/1" >1942-43</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1941-42/1" >1941-42</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1940-41/1" >1940-41</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1939-40/1" >1939-40</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1938-39/1" >1938-39</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1937-38/1" >1937-38</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1936-37/1" >1936-37</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1935-36/1" >1935-36</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1934-35/1" >1934-35</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1933-34/1" >1933-34</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1932-33/1" >1932-33</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1931-32/1" >1931-32</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1930-31/1" >1930-31</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1929-30/1" >1929-30</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1928-29/1" >1928-29</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1927-28/1" >1927-28</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1926-27/1" >1926-27</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1925-26/1" >1925-26</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1924-25/1" >1924-25</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1923-24/1" >1923-24</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1922-23/1" >1922-23</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1921-22/1" >1921-22</a>&nbsp;</td>
</tr>



<tr>
<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1920-21/1" >1920-21</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1919-20/1"   class="selec">1919-20</a>&nbsp;</td>


<td class="s_list_td">&nbsp;<a href="/user/trade_list_by_season/1918-19/1" >1918-19</a>&nbsp;</td>
</tr>


</table>        </div>
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Skyscraper -->
<ins class="adsbygoogle"
     style="display:inline-block;width:160px;height:600px"
     data-ad-client="ca-pub-1410014940782819"
     data-ad-slot="4811248883"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
        
      </div>
      <!--container-->
      <div id="container">
      
	  <h3 class="title">1919-20 Trades  </h3>

<script type="text/javascript"><!--
google_ad_client = "ca-pub-1410014940782819";
/* NHLLeaderboard */
google_ad_slot = "7081146085";
google_ad_width = 728;
google_ad_height = 90;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>

        <p><span class="pg"></span></p>

	  
	  	  
	  
	  	  
	  <table width="95%" align="center" style="border:1px solid #666666; margin-top:5px;">
	  <input type="hidden" value="8286" />
	   <tr>
	  <td width="40%" class="label" align="center"><strong>Toronto Arenas acquire</strong></td>
	   <td width="20%" class="label" align="center"><strong>Date</strong></td>
	   <td width="40%" class="label" align="center"><strong>Montreal Canadiens acquire</strong></td>
	  </tr>
	  
	  <tr>
	  <td width="40%" valign="top">
	  <table width="100%">
	  <tr>
	  <td width="25%">
	  <img src="/asset/team_logos/Toronto_Arenas.gif" width="60" height="40" />
	  </td>
	  <td width="75%" valign="top">
	  	   	  
		   
		  
			<span class="link"><a href="javascript:show('4394||| Goldie Prodgers')"> Goldie Prodgers</a><br/></span>
		  
		  	  
	  	  	  </td>
	  
	  </tr>
	  
	  </table>
	  
	  </td>
	    <td width="20%" valign="top" align="center">January 14, 1920</td>
	   <td width="40%" valign="top">
	   
	  <table width="100%">
	  <tr>
	  <td width="75%" valign="top">
	   
	   	     	  
		   
		  
			<span class="link"><a href="javascript:show('23517||| Harry Cameron')"> Harry Cameron</a><br/></span>
		  
		  	  
	  	  	  
	  </td>
	  <td width="25%">
	  <img src="/asset/team_logos/Montreal_Canadiens.gif" width="60" height="40" />
	  </td>
	  </tr>
	  
	  </table>
	   </td>
	  </tr>
	  
	  
	  	  	  
	    	  
	  
	  </table>
	  
	  	  
	  <table width="95%" align="center" style="border:1px solid #666666; margin-top:5px;">
	  <input type="hidden" value="8288" />
	   <tr>
	  <td width="40%" class="label" align="center"><strong>Quebec Bulldogs acquire</strong></td>
	   <td width="20%" class="label" align="center"><strong>Date</strong></td>
	   <td width="40%" class="label" align="center"><strong>Montreal Canadiens acquire</strong></td>
	  </tr>
	  
	  <tr>
	  <td width="40%" valign="top">
	  <table width="100%">
	  <tr>
	  <td width="25%">
	  <img src="/asset/team_logos/Quebec_Bulldogs.gif" width="60" height="40" />
	  </td>
	  <td width="75%" valign="top">
	  	   	  
		   
		  
			<span class="link"><a href="javascript:show('29897||| Ed Carpenter')"> Ed Carpenter</a><br/></span>
		  
		  	  
	  	  	  </td>
	  
	  </tr>
	  
	  </table>
	  
	  </td>
	    <td width="20%" valign="top" align="center">December 21, 1919</td>
	   <td width="40%" valign="top">
	   
	  <table width="100%">
	  <tr>
	  <td width="75%" valign="top">
	   
	   	     	  
		   
		  
			<span class="link"><a href="javascript:show('4394||| Goldie Prodgers')"> Goldie Prodgers</a><br/></span>
		  
		  	  
	  	  	  
	  </td>
	  <td width="25%">
	  <img src="/asset/team_logos/Montreal_Canadiens.gif" width="60" height="40" />
	  </td>
	  </tr>
	  
	  </table>
	   </td>
	  </tr>
	  
	  
	  	  	  
	    	  
	  
	  </table>
	  
	  	  
	  
	  	  
	  <p><span class="pg"></span></p>

<script type="text/javascript"><!--
google_ad_client = "ca-pub-1410014940782819";
/* NHLLeaderboard */
google_ad_slot = "7081146085";
google_ad_width = 728;
google_ad_height = 90;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
	  
      </div>
    </div>


  </div>

</div>
<!--footer-->
<div id="footer-area">
	
<div id="footer-inner">
    <div class="footer-right" >
    	<ul>
      	<li><a href="/user/about_us">About NHL Trade Tracker</a>&nbsp;&nbsp;</li>
		<li><a href="/user/contact_us">Contact Us</a>&nbsp;&nbsp;</li>
        
      </ul>
	  </div>
 
  </div></div>

</body>
</html>
`;

export default page;
