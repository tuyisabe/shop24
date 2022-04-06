//(function(){

    metahubUi = {
        init:function(){
            this.sidebar();
            this.quickbar();
            this.designSelect();
            this.chkAllData();
            this.tooltip();
            this.tree();
            this.messaging();
            this.menuControl();
            this.btnTop();
            this.btnOnOffToogle();
            this.lnbLayerOpen();
            this.lnbLayerClose();
        },

        sidebar:function(){
            var sideBar = $('.mh-side-nav'),
            sideBarBtn = $('.mh-sn-toggle'),
            body = $('body'),
            bodyClickClass = 'mh-sn-close',
            bodyHoverClass = 'mh-sn-opening';
            $('.mh-sn-toggle').on('click', function(){
                body.hasClass(bodyClickClass) ? body.removeClass(bodyClickClass + ' ' +bodyHoverClass) : body.addClass(bodyClickClass)
            });
            sideBarBtn.hover(function(){
                if(body.hasClass(bodyClickClass)) body.addClass(bodyHoverClass)
            },function(){
                if(body.hasClass(bodyClickClass)) body.removeClass(bodyHoverClass)
            });
            $('.mh-mlview').find('a').on('click', function(){
                var thisTree = $(this).parent(),
                activeTree = thisTree.parent().children('.mh-open');
                if(thisTree.hasClass('mh-open')){
                    thisTree.find('.mh-mlview-menu').slideUp('300', function(){
                        thisTree.removeClass('mh-open')
                    });
                }else{
                    if(activeTree.find('.mh-mlview-menu').length){
                        activeTree.find('.mh-mlview-menu').slideUp('300', function(){
                            activeTree.find('.mh-mlview-menu').parent().removeClass('mh-open')
                        });
                    }else{
                        activeTree.removeClass('mh-open');
                    }
                    $(this).next('.mh-mlview-menu').slideDown('300', function(){
                        thisTree.addClass('mh-open')
                    });
                }
            })
        },

        lnbLayerOpen:function(){
            var popupWidth = $(".mh-container").outerWidth()/2;
            $(".layer_pop").click(function(){
                $('.layer_pop.active').removeClass('active');
                //console.log("open");
                $(".mh-nav-layer").show().animate({"width": popupWidth, "right": -popupWidth, "opacity": 1},300);
                //레프트네비 스크롤 영역

                
                $(this).addClass('active');
                
                $(".dimmed").show();
                var layerGreedLeng = $('.mh-nav-layer').find('.k-grid').length;
                if (layerGreedLeng >= 1){
                    setTimeout(function () { gridIcsmenu(); }, 300);
                };
                
            });

        },
        lnbLayerClose:function(){

            
        },

        


        quickbar:function(){
            var quickBar = $('.mh-quickbar'),
            body = $('body'),
            bodyClickClass = 'mh-quickbar-close',
            bodyHoverClass = 'mh-quickbar-opening';
            $('.mh-quickbar-toggle').on('click', function(){
                body.hasClass(bodyClickClass) ? body.removeClass(bodyClickClass + ' ' +bodyHoverClass) : body.addClass(bodyClickClass)
            })
            quickBar.hover(function(){
                if(body.hasClass(bodyClickClass)) body.addClass(bodyHoverClass)
            },function(){
                if(body.hasClass(bodyClickClass)) body.removeClass(bodyHoverClass)
            });
        },
        menuControl:function(){
            $('.mh-menu-open').on('click',function(){
                $(this).removeClass('mh-show');
                $('.mh-menu-close').addClass('mh-show');
                $('.mh-mlview-menu').slideDown('300', function(){
                    $('.mh-menu-list li.mh-mlview').not('.mh-open').addClass('mh-open');
                });
            });
            $('.mh-menu-close').on('click',function(){
                $(this).removeClass('mh-show');
                $('.mh-menu-open').addClass('mh-show');
                $('.mh-mlview-menu').slideUp('300', function(){
                    $('.mh-menu-list li.mh-mlview').removeClass('mh-open');
                });
            });
        },
        designSelect:function(){
            var thisSelect;
            $(document).on('click', '.mh-dselect .mh-dselect-btn' , function(){
                thisSelect = $(this).parents('.mh-dselect, .mh-dselect-btn');
                if(thisSelect.hasClass('mh-open')){
                    if($(this).parents().hasClass("mh-nav-layer-contents")){
                        $(".sub-dimmed").hide();
                        thisSelect.removeClass('mh-open')
                    }else{
                        thisSelect.removeClass('mh-open')
                    }
                   
                    thisSelect.removeClass('mh-open')
                }else{

                    if($(this).parents().hasClass("mh-nav-layer-contents")){
                        $(".sub-dimmed").show();
                        $('.mh-dselect').removeClass('mh-open');
                        thisSelect.addClass('mh-open').focus();
                    }else{
                        $('.mh-dselect').removeClass('mh-open');
                        thisSelect.addClass('mh-open').focus();
                    }
                }
                selectEvt();
            });
            $(document).on('click', function(e){
                if(!$('.mh-dselect').has(e.target).length){
                    $('.mh-dselect').removeClass('mh-open');
                    $(".sub-dimmed").hide();
                }
            });
            function selectEvt(){
                thisSelect.find('ul').find('a').on('click', function(){
                    var selectValue = $(this).html();
                    $(this).closest('.mh-dselect').children('.mh-dselect-btn').html(selectValue)
                    thisSelect.removeClass('mh-open')
                })
            }
        },
        chkAllData:function(){
            $('.mh-check-all').click(function() {
                $(this).parents('.mh-data-tbl').find('input:checkbox').prop('checked', this.checked);
            });

            $('.mh-form-checkbox input').not('.mh-check-all').click(function() {
                var checked = $(this).parents('.mh-data-tbl').find('tbody input:checked');
                var notChecked = $(this).parents('.mh-data-tbl').find('tbody input');
                if (notChecked.length == checked.length) {
                    $('.mh-check-all').prop('checked', true);
                } else {
                    $('.mh-check-all').prop('checked', false);
                }
            });
        },
        tooltip:function(){
            $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });
        },
        tree: function () {

            var buttons = '<div class="mh-tree-btns"><button type="button" class="btn mh-btn-icon mh-btn-outline-default add_tree_list"><i class="fas fa-plus"></i></button><button type="button" class="btn mh-btn-icon mh-btn-outline-default modi_tree_list"><i class="fas fa-pen"></i></button><button type="button" class="btn mh-btn-icon mh-btn-outline-default del_tree_list"><i class="fas fa-minus"></i></button></div>'

            var buttons1 = '<div class="mh-tree-btns"><button type="button" class="btn mh-btn-icon mh-btn-outline-default modi_tree_list"><i class="fas fa-pen"></i></button><button type="button" class="btn mh-btn-icon mh-btn-outline-default del_tree_list"><i class="fas fa-minus"></i></button></div>'

            $(document).on('click', '.mh-tree .mh-treeview-btn, .mh-tree li .mh-tree-text a', function () {
                var thisBtn, thisItem;
                if ($(this).hasClass('mh-treeview-btn')) {
                    thisBtn = $(this);
                } else {
                    thisBtn = $(this).closest('li').children('.mh-treeview-btn');
                }
                thisItem = thisBtn.parent();

                if (thisItem.is('.mh-open')) {
                    thisBtn.add(thisItem.find('.mh-open').find('.mh-treeview-btn')).text('+').removeClass('minus').addClass('plus')
                    if (thisBtn.hasClass('mh-hsicon-plus')){ thisBtn.removeClass('minus') };
                    thisItem.add(thisItem.find('.mh-open')).removeClass('mh-open').find('.mh-treeview-menu').slideUp(300);
                } else {
                    thisBtn.text('-').removeClass('plus').addClass('minus')
                    if(thisBtn.hasClass('mh-hsicon-plus')){ thisBtn.addClass('minus')};
                    thisItem.children('.mh-treeview-menu').stop().slideDown(300);
                    thisItem.addClass('mh-open');
                }
            });
            $('.mh-tree li .mh-form-checkbox').click(function (e) {
                e.stopPropagation();
            });
            $(document).on('mouseenter', '.mh-tree .mh-tree-text, .mh-tree .mh-middle-title', function (e) {
                if (!$(this).parents().hasClass('no-btn')) {
                    if (!$(this).parents().hasClass('two-btn')){
                        $(this).append(buttons);
                    }else{
                        $(this).append(buttons1);
                    }
                    
                }
            });
            $(document).on('mouseleave', '.mh-tree .mh-tree-text, .mh-tree .mh-middle-title', function (e) {
                if (!$(this).parents().hasClass('no-btn')) {
                    $('.mh-tree-btns').remove();
                }
            });
            $(document).on('change', '.mh-tree .mh-form-checkbox input[type="checkbox"]', function () {
                var thisChk = $(this),
                    thisItem = thisChk.parent().parent().parent('li');
                if (thisItem.hasClass('mh-treeview')) {
                    thisChk.prop('checked') ? thisItem.find('input[type="checkbox"]').prop('checked', true) : thisItem.find('input[type="checkbox"]').prop('checked', false)
                }
                if (thisItem.closest('.mh-treeview').length) {
                    allCheck(thisItem.parent().children('li'))
                }
                function allCheck(target) {
                    var item = target,
                        parentItem = item.parent().parent('.mh-treeview');
                    parentItemChk = parentItem.children('.mh-tree-text').children('.mh-form-checkbox').children('input[type="checkbox"]');
                    item.each(function (i) {
                        var itemChk = $(this).children('.mh-tree-text').children('.mh-form-checkbox').children('input[type="checkbox"]');
                        if (!itemChk.prop('checked')) {
                            parentItemChk.prop('checked', false)
                            return false;
                        } else if ($(this).index() == i && itemChk.prop('checked')) {
                            parentItemChk.prop('checked', true)
                        }
                    });
                    if (parentItem.parent().parent('.mh-treeview').length) { allCheck(parentItem.parent().children('li')) }
                }
            });
           
        },
        messaging:function(){
            $(document).on('click', '[data-dismiss="mh-message"]', function(){
                $(this).closest('.mh-message').fadeOut(300);
            })
        },
        fullScrollBox:function(){
            if($('.mh-full-scrollbox').hasClass("noHeight")){

            }else{
                var offsetBottom;
                $('.mh-full-scrollbox').children('.mh-fs-btns').length ? offsetBottom = $('.mh-full-scrollbox').children('.mh-fs-btns').outerHeight() + 2 : offsetBottom = 2;
                //console.log(offsetBottom);
                //console.log($('.mh-cotent-wrapper').height());
                //console.log(parseInt($('.mh-cotent-wrapper').css('padding-top').split('px')[0]));
                //console.log($('.mh-full-scrollbox').children('.mh-fs-cont').offset().top);
                //console.log($('.mh-header').outerHeight() - offsetBottom);
                $('.mh-full-scrollbox').children('.mh-fs-cont').outerHeight(770/*$('.mh-cotent-wrapper').height() + parseInt($('.mh-cotent-wrapper').css('padding-top').split('px')[0])*/ - $('.mh-full-scrollbox').children('.mh-fs-cont').offset().top + $('.mh-header').outerHeight() - offsetBottom);
            }
            
        },
        btnTop:function(){
            $(document).on('click', '.mh-btn-top', function(){
                $('.mh-cotent-wrapper').scrollTop(0)
            })
        },
        btnOnOffToogle:function(){
            var toogleWrap = $('.mh-form-switch'),
            onItem = toogleWrap.find('.mh-fw-on'),
            offItem = toogleWrap.find('.mh-fw-off');
            $(document).on('click', '.mh-form-switch > a', function(){
                if(toogleWrap.hasClass('mh-off')){
                    toogleWrap.removeClass('mh-off').html('<span class="mh-fw-on">' + onItem.text() + '</span><a href="#" class="mh-fw-off">' + offItem.text() + '</a>')
                }else{
                    toogleWrap.addClass('mh-off').html('<a href="#" class="mh-fw-on">' + onItem.text() + '</a><span class="mh-fw-off">' + offItem.text() + '</span>')
                }
            })
        },
        loadingShow:function(){
            var loadingBar = '<div class="mh-loading"><span class="mh-loading-img"></span></div>'
            $('body').append(loadingBar);
        },
        loadingHide:function(){
            $('.mh-loading').remove();
        }
        

    }
    
    




    

    metahubUi.init();
    // box tool button event
    var metahubBoxTools = {
        evt:function(){
            var _this = this;
            boxTools = $('.mh-box-tools'),
            btnCollapse = boxTools.find('.btn[data-widget="collapse"]'),
            btnFullscreen = boxTools.find('.btn[data-widget="fullscreen"]'),
            btnRemove = boxTools.find('.btn[data-widget="remove"]');
            _this.thisBox, _this.thisBoxBody, _this.thisBoxFooter;
            btnCollapse.on('click', function(){
                _this.thisBox = $(this).closest('.mh-base-box'),
                _this.thisBoxBody = _this.thisBox.children('.mh-box-body'),
                _this.thisBoxFooter = _this.thisBox.children('.mh-box-footer');
                $(this).closest('.mh-base-box').hasClass('mh-collapsed') ? _this.spread($(this)) : _this.collapse($(this))
                $(this).tooltip('hide')
            });
            btnFullscreen.on('click', function(){
                _this.thisBox = $(this).closest('.mh-base-box');
                $(this).closest('.mh-base-box').hasClass('mh-fullscreen') ? _this.restoreScreen($(this)) : _this.fullScreen($(this))
                $(this).tooltip('hide')
            });
            btnRemove.on('click', function(){
                _this.remove($(this));
                $(this).tooltip('hide')
            });
        },
        spread:function(btn){
            var _this = this,
            thisSpread = btn;
            thisSpread.attr('data-original-title', 'Collapse').find('.mh-icon-more-view').removeClass('mh-icon-more-view').addClass('mh-icon-close-view');
            _this.thisBoxBody.add(_this.thisBoxFooter).slideDown(300, function(){
                _this.thisBox.removeClass('mh-collapsed')
            });
        },
        collapse:function(btn){
            var _this = this,
            thisCollapse = btn;
            thisCollapse.attr('data-original-title', 'Spread').find('.mh-icon-close-view').removeClass('mh-icon-close-view').addClass('mh-icon-more-view');
            _this.thisBoxBody.add(_this.thisBoxFooter).slideUp(300, function(){
                _this.thisBox.addClass('mh-collapsed')
            });
        },
        restoreScreen:function(btn){
            var _this = this,
            thisRs = btn;
            thisRs.attr('data-original-title', 'Fullscreen').find('.mh-icon-spread-reduce').removeClass('mh-icon-spread-reduce').addClass('mh-icon-spread');
            _this.thisBox.removeClass('mh-fullscreen')
        },
        fullScreen:function(btn){
            var _this = this,
            thisFullScreen = btn;
            thisFullScreen.attr('data-original-title', 'Restore Screen').find('.mh-icon-spread').removeClass('mh-icon-spread').addClass('mh-icon-spread-reduce');
            _this.thisBox.addClass('mh-fullscreen')
        },
        remove:function(btn){
            var thisRemove = btn
            thisRemove.closest('.mh-base-box').slideUp(300, function(){
                thisRemove.closest('.mh-base-box').remove();
            })
        }
    }
    metahubBoxTools.evt();


    /* 트리박스 열고닫기 */
    $(".tree-close-btn").on('click', function () {
        $(".main-content").addClass("tree-close");
    })
    $(".tree-open-btn").on('click', function () {
        $(".main-content").removeClass("tree-close");
    })



    

    //닫기탭
    $(".mh-nav-layer-close, .dimmed, #mh-common2-tab").click(function(){
        //console.log("close");
        $(".mh-nav-layer").animate({"width": 0, "right": -0, "opacity": 0},400);
        $('.layer_pop.active').removeClass('active');
        $(".dimmed").hide();
        $(".sub-dimmed").hide();
        
    });
    
    //체크박스 클릭시 오픈하는 방법  :  ckeckbox.toggle-switch를 넣어주고,  와 .열고닫을아이템은  아이디+on  
    //$("input.toggle-switch").on("click", function () {
	$(document).on("click", ".toggle-switch", function () {
        var switchname = "#" + $(this).attr("id") + "on";
        if ($(this).is(":checked") == true) {
            $(switchname).show();
        }else{
            $(switchname).hide();
        }
    });

    //트리 열고닫기
    $('.tree_showhide').on('click', function () {
        $(this).toggleClass('on');
        if ($(this).hasClass('on')) {
            $(this).parents('.mh-full-scrollbox').find('.tree_active ul').stop().slideDown();
            $(this).text('전체 메뉴 닫기');
        } else {
             $(this).parents('.mh-full-scrollbox').find('.tree_active ul').stop().slideUp();
            $(this).text('전체 메뉴 열기');
        }
    });
    //트리추가하기
    $(".add-list-btn").on('click', function () {
        $(this).parents(".mh-section-header").siblings(".mh-fs-cont").find(".mh-tree").append("<li><div class='mh-tree-text'><a href=''><input type='text' class='form-control mh-form-control'/></a></div></li>");

    });
    $(".show-btn-02").on('click', function () {
        $(this).parents(".show-type").siblings(".show-area-02").addClass('on');

    });
    $(".hide-btn-02").on('click', function () {
        $(this).parents(".show-type").siblings(".show-area-02").removeClass('on');

    });
    $(".add-guestbox").on('click', function () {
        var guestbox_text = $(this).parent().siblings(".guestbox-text").find('input').val();
        if (!guestbox_text == ""){
            $(this).parents(".geust-box-box").siblings(".guest-box-area").find(".mh-scroll-custom-area ul").append("<li class='guest-item'><a class='guest-link' href='#'>" + guestbox_text +"</a><a class='mh-btn-close-pn guest-item-close' href='#'><i class='mh-icon mh-icon-close'></i></a></li>");
        };
    });
    $(".guest-item-close").on('click', function () {
        $(this).parent(".guest-item").remove();

    });






	//실시간 토스트
	function func_RealToast(obj){

		var $this = $(obj),
			//isFalse = false,
			timeSet,
			delay = 3000

		$this.show().animate({bottom:0, opacity:1});

		$this.find('a, button').on('click', function(){
			//isFalse = true;
			$this.remove();
		});

		timeSet = setTimeout(function(){
			$this.fadeOut(function(){
				$this.remove();
			});
			/*
			if( $this.hasClass('save') ){
				if(!isFalse){
					$saveTs.append($this.clone(true))
					func_ToastAmount()
				}
			}
			*/
		},delay);

	}

	func_RealToast('#aa');


	
	function winPop(u, t, w, h){
		var popupX = (window.screen.width / 2) - (w / 2);
		var popupY= (window.screen.height /2) - (h / 2);
		window.open(u, t, 'status=no, height='+ h +', width='+ w +', left='+ popupX + ', top='+ popupY + ', screenX='+ popupX + ', screenY= '+ popupY);
	}


		$('.confirm-yn-check .state_y').on('change', function(){
			$(this).closest('.confirm-yn-check').find('button').removeAttr('disabled');
		}).change();

		$('.confirm-yn-check .state_n').on('change', function(){
			$(this).closest('.confirm-yn-check').find('button').attr('disabled','disabled');
		}).change();


		
   

$(function () {
    /*멀티셀렉트    input에   data-notice="구분자"로 처리할것.   */
    $(document).on('click', '.mh-tselect-btn',function () {
        if ($(this).parent(".mh-tselect").hasClass('mh-open')){
            $(".mh-tselect").removeClass('mh-open');
            $('.mh-tree-inner').hide();

            $(this).siblings('.mh-tree-inner').hide();
            $(this).siblings('.mh-tree-inner .mh-search-retrun').hide();

        }else{
            $(".mh-tselect").removeClass('mh-open');
            $('.mh-tree-inner').hide();
            $(this).parent(".mh-tselect").addClass('mh-open');
            $(this).siblings('.mh-tree-inner').show();
            $(this).siblings('.mh-tree-inner .mh-search-retrun').hide();
            
        }

    });
    $(".mh-tree-inner .btn.inner-close").on('click', function () {
        $(this).parents('.mh-tree-inner').hide();
        $(this).parents(".mh-tselect").removeClass('mh-open');
    });


    //common.js로 이동
//    $('.mh-tree-search input').on('keyup focusin', function () {
//        $(this).parent(".mh-tree-search").siblings('.mh-search-retrun').show();
//        $(this).parent(".mh-tree-search").siblings('.mh-search-retrun').find('.scroll-content').show();
//        $(this).siblings('.mh-tree-search button').addClass('on');
//    });

    $('.mh-tree-select ul').find('li').each(function () {
        if ($(this).find('ul').length > 0) { $(this).prepend('<span class="show-btn"></span>') }
    });

    $(document).on('click', '.mh-tree-select ul .show-btn', function () {
        $(this).toggleClass('on');
        if ($(this).parent('li').find(' > ul').length > 0) { $(this).parent('li').find(' > ul').toggleClass('show'); }
    })

    $('.mh-tree-search button').on('click', function () {
        $(this).parent(".mh-tree-search").siblings('.mh-search-retrun').hide();
        $(this).removeClass('on');
    });

    //멀티셀렉트 체크박스 선택시처리 -> common.js로 이동
//    $('.mh-tree-select .form-check input[type = "checkbox"]').on('click', function () {
//
//
//        //var lower = $(this).parent(".form-check").siblings("ul").find("input[type = 'checkbox']");
//        //단일과 멀티 구분후 , 건별출력
//        if ($(this).parents('.mh-tree-select').hasClass('multi')) {
//            $(this).prop('checked', this.checked);
//            $(this).parent(".form-check").siblings("ul").find("input[type = 'checkbox']").prop('checked', this.checked);
//
//            var allfind = $(this).parents(".mh-tree-select").find("input[type = 'checkbox']:checked");
//            var allfindtext = allfind.first().siblings(".form-check-label").text();
//
//            if (allfind.length > 1) {
//                $(this).parents('.mh-tree-inner').siblings('.mh-tselect-btn').text(allfindtext + ' 외 ' + (allfind.length - 1) + '건');
//            } else if (allfind.length == 1) {
//                $(this).parents('.mh-tree-inner').siblings('.mh-tselect-btn').text(allfindtext);
//            } else {
//                $(this).parents('.mh-tree-inner').siblings('.mh-tselect-btn').text('전체');
//            }
//
//        } else {
//
//            $(this).parents(".mh-tree-select").find("input[type = 'checkbox']").prop("checked", false);
//            $(this).prop("checked", true);
//
//            var allfind = $(this).parents(".mh-tree-select").find("input[type = 'checkbox']:checked");
//            var allfindtext = allfind.first().siblings(".form-check-label").text();
//
//            $(this).parents('.mh-tree-inner').siblings('.mh-tselect-btn').text(allfindtext);
//
//            if (allfind.length == 0) {
//                $(this).parents('.mh-tree-inner').siblings('.mh-tselect-btn').text('선택');
//            }
//            $(this).parents('.mh-tree-inner').hide();
//            $(this).parents(".mh-tselect").removeClass('mh-open');
//
//        }
//    });

    //검색관련 : 멀티셀렉트 -> common.js로 이동
//    $('.mh-search-retrun .form-check input[type = "checkbox"]').on('click', function () {
//
//        var searchReturn = $(this).attr("data-notice");
//        //console.log(searchReturn);
//        if ($(this).parents('.mh-search-retrun').siblings('.mh-tree-select').hasClass('multi')) {
//            $(this).parents('.mh-search-retrun').siblings('.mh-tree-select').find("input[type = 'checkbox'][data-notice = " + searchReturn + "]").prop('checked', this.checked);
//
//            var allfind = $(this).parents('.mh-search-retrun').siblings('.mh-tree-select').find("input[type = 'checkbox']:checked");
//            var allfindtext = allfind.first().siblings(".form-check-label").text();
//
//            if (allfind.length > 1) {
//                $(this).parents('.mh-tree-inner').siblings('.mh-tselect-btn').text(allfindtext + ' 외 ' + (allfind.length - 1) + '건');
//            } else if (allfind.length == 1) {
//                $(this).parents('.mh-tree-inner').siblings('.mh-tselect-btn').text(allfindtext);
//            } else {
//                $(this).parents('.mh-tree-inner').siblings('.mh-tselect-btn').text('전체');
//            }
//        } else {
//            $(".mh-tree-select").find("input[type = 'checkbox']").prop("checked", false);
//            $(".mh-tree-select").find("input[type = 'checkbox'][data-notice = " + searchReturn + "]").prop('checked', true);
//
//            var allfind = $(this).parents('.mh-search-retrun').siblings('.mh-tree-select').find("input[type = 'checkbox']:checked");
//            var allfindtext = allfind.first().siblings(".form-check-label").text();
//
//            triggerBtn.text(allfindtext);
//            if (allfind.length == 0) {
//                $(this).parents('.mh-tree-inner').siblings('.mh-tselect-btn').text('선택');
//            }
//            $('.mh-tree-inner').hide();
//            $('.mh-search-retrun').hide();
//            $(".mh-tselect").removeClass('mh-open');
//        }
//    });

    $('.form-group.captha-input input').keyup(function (e){
        var content = $(this).val();
        if(content.length == 0){
            $(this).parent().removeClass('is-filled');
        }else{
            $(this).parent().addClass('is-filled');
        };
    });
    $('button.btn-delete').on('click', function(){
        $(this).siblings('input').val('');
        $(this).parent().removeClass('is-filled');
    });

});

//간단 열고닫기
$('.textShow').on('click', function () {
    $(this).prop('checked', this.checked);
    $(this).parent(".mh-form-checkbox").siblings(".textShowBox").toggleClass("on");
});





//트리추가, 트리편집 
$(document).on('click', '.add_tree_list', function () {
    $(this).parents('li').first().addClass("mh-treeview mh-open").append('<button type="button" class="mh-treeview-btn mh-hsicon mh-hsicon-plus minus">-</button><ul class="mh-treeview-menu" style="display:block;"><li><div class="mh-tree-text"><input type="text" class="form-control mh-form-control"></div></li>');
    addTreeList($(this));
}); 
$(document).on('click', '.modi_tree_list', function () {
    $(this).parents('.mh-tree-btns').first().siblings("a").remove();
    $(this).parents('.mh-tree-btns').first().before('<input type="text" class="form-control mh-form-control">');
    modiTreeList($(this));

}); 


