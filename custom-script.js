function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
jQuery(document).ready(function($){
	
	//alert('ff');
	 //jQuery('#dashboard_primary' ).dialog();
     var json_data = JSON.parse($("#json_fetched_data").html());
     console.log(json_data);
	
    var $info = $("#custom_container");
    $info.dialog({                   
        'dialogClass'   : 'wp-dialog',           
        'modal'         : true,
        'autoOpen'      : false, 
        'closeOnEscape' : true,      
        'buttons'       : {
            "Close": function() {
                $(this).dialog('close');
            }
        }
    });   
    

	(function($) {
    if (!$.curCSS) {
       $.curCSS = $.css;
    }
})(jQuery);

var pageURL = window.location.pathname;
var result = pageURL.substring(pageURL.lastIndexOf("/") + 1);
var url      = window.location.href; 
//alert("test--"+result);
//alert(json_data['data_tour'][0]['url']);
//$(json_data['data_tour']).each(function( index,val ) {
    if(window.location.href.indexOf("step") > -1){
        //salert(getParameterByName('step'));
        var current_step = getParameterByName('step');
        
    }else{
        var current_step = 0;
    }

   // alert(current_step);

       // alert("---"+json_data['data_tour'][current_step]['headline']);
            $("#custom_container").html("").html("<h1>"+json_data['data_tour'][current_step]['headline']+"</h1><br>"+json_data['data_tour'][current_step]['text']);
                $info.dialog('open');
                jQuery(jQuery(".ui-dialog").detach()).appendTo(".wrap");
                $(json_data['data_tour'][current_step]['higlight_id_class']).css('border','1px solid red');
                if(json_data['data_tour'][current_step]['next_redirect']!=""){
                  //  alert(val['next_redirect']);
                setTimeout(function(){
                   // alert("1");
                    if(window.location.href.indexOf("?") > -1){
                        var additional = "&";
                    }else{
                        var additional = "?";
                    }
                  //  alert(json_data['data_tour'][current_step]['next_redirect'].replace(/&amp;/g, '&'));
                   // console.log(json_data['data_tour'][current_step]['next_redirect']+additional+"step="+(parseInt(current_step)+1));
                    window.location.replace(json_data['data_tour'][current_step]['next_redirect'].replace(/&amp;/g, '&')+additional+"step="+(parseInt(current_step)+1));

                },json_data['data_tour'][current_step]['duration_time']) 
        
            }
//        if(val['url']=="edit.php?setup=1" ){

//         $("#custom_container").html("<h1>testing</h1>HELLO WORLD22! edit1");
//         $("#menu-posts  ul li:nth-child(3)" ).css('border','1px solid red');
//         $(val['higlight_id_class']).css('border','1px solid red');
//         setTimeout(function(){
//             window.location.replace("post-new.php");

//         },val['duration_time']) 

//        }

        

// if(val['url']=="post-new.php"){
 
//         $("#custom_container").html(val['headline']+"<br>"+val['text']);
//         $info.dialog('open');
//         jQuery(jQuery(".ui-dialog").detach()).appendTo("#titlewrap");
//         $(val['higlight_id_class']).css('border','1px solid red').attr("placeholder", "Type your title here");
    
 
// }

// if(val['url']=="post.php"){
  
//        $("#custom_container").html(val['headline']+"<br>"+val['text']);
//            $info.dialog('open');
//             jQuery(jQuery(".ui-dialog").detach()).appendTo("#titlewrap");
//                 $(val['higlight_id_class']).css('border','6px solid red');
           
//         }

      
//    });




$(".ui-widget-content").css('background-color','#ffffff');
},jQuery)

