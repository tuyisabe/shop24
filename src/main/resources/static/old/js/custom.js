 $(function() {
		treeMenuInit();
		function treeMenuInit(){
			$('.nppa-tree li').each(function(){
				if($(this).find($('.nppa-treeview-list')).length>0){
					$('.nppa-treeview-list',this).hide();
					$(this).prepend('<button type="button" class="nppa-tree-expander"></button>')
				};
			});

			$(document).on('click', '.nppa-tree .nppa-tree-expander',function(){
				var thisBtn, thisItem;
				if($(this).hasClass('nppa-tree-expander')){
					thisBtn = $(this);
				}else{
					thisBtn = $(this).closest('li').children('.nppa-tree-expander');
				}
				 thisItem = thisBtn.parent();
				
				if (thisItem.is('.tree-open')) {
					thisBtn.add(thisItem.find('.tree-open').find('.nppa-tree-expander'))
					thisItem.add(thisItem.find('.tree-open')).removeClass('tree-open').find('.nppa-treeview-list').hide();
				} else {
					thisItem.children('.nppa-treeview-list').stop().show();
					thisItem.addClass('tree-open');
				}
			});
		};
    });
