require(['gitbook', 'jquery'], function(gitbook, $) {
    var configs;
    var apiUrl = "/api/product/withFavorite";
    var defaultPath = "https://tfuse.bingosoft.net";
    //生成内容导航
    function generateSectionNavigator(){
        $(".page-inner .markdown-section").find("h1,h2,h3").each(function(){
            var cls="anchor-h1";
            if($(this).is("h2")){
                cls="anchor-h2";
            }
            if($(this).is("h3")){
                cls="anchor-h3";
            }
            var text = $(this).text();
            var href = $(this).attr("id");
            $(".book-anchor-body").append("<a id='an_"+text+"' class='anchor-text "+cls+"' title='"+text+"'  href='#"+href+"'>"+text+"</a>")
        });

        $(".book-anchor-body>a").click(function(){
            $(".book-anchor-body>a").removeClass("selected");
            $(this).addClass("selected");
        });

        //获取hash值定向到指定位置
        var hash = decodeURIComponent(location.hash);
        if(hash){
            hash = hash.substring(1);
            $("#an_"+hash).addClass("selected");
        }
    }

    //基础设置
    function setBaseLayout(){
        //标题
        var $title = $(".header-inner .title");
        $title.text(gitbook.state.config.title);
        var lang = gitbook.state.innerLanguage;
        var placeholder = "Enter a Keyword"
        if(lang=="cn"){
           placeholder = configs.pluginsConfig["theme-fexa"]["search-placeholder_cn"] ;
        }else if(lang=="en"){
           placeholder = configs.pluginsConfig["theme-fexa"]["search-placeholder_en"] ;
        }
        //搜索框
        var $searchIcon = $("#searchIcon");
        var $search = $('#book-search-input');
        var $searchInput = $search.find("input");
        
        $searchInput.attr("placeholder",placeholder);
        $searchIcon.click(function(e){
            $search.fadeIn();
            $searchIcon.hide();
            $searchInput.focus();
        });
        $searchInput.blur(function(e) {
            $search.hide();
            $searchIcon.fadeIn();
        });

        var $homeIcon = $("#homeIcon");
        $homeIcon.click(function(e){
            location.href = "/";
        });

        //去掉gitbook-link
        $(".summary .divider").hide();
        $(".summary .gitbook-link").hide();
        $(".summary .gitbook-link").remove();
        $(".summary .divider").remove();
        
    }

    //尝试获取配置信息
    function tryFetchConfig(url){
        var code = configs.code;
      
        var nav = configs.variables["themeFexa"].nav_en;       
        
        //如果没有控制台的配置就不发请求
        var consoleObj = nav.filter(function(item){
            return item.type == "console";
        });
        if(consoleObj.length<=0)return;
        
        
    }

    //获取url参数
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    gitbook.events.on('start', function() {
       console.log('hello world!');
    });

    gitbook.events.on('page.change', function() {
        configs = gitbook.state.config;
        setBaseLayout();
        generateSectionNavigator();
        try{
            tryFetchConfig(apiUrl);
        }catch(err){
            console.log(err);
        }

        // 遇到一些特定参数
        var isRightRef = $(window.frameElement).attr("isrightref");
        if(isRightRef == "true"){
            $(".header-inner").hide();
            $(".book-summary, .book-body").css("top","0px");
            $(".book-anchor").hide();
            $("body>div").removeClass("with-summary");
            $(".js-toolbar-action").hide();
        }
    });
});
