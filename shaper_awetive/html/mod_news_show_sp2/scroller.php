<?php
/*------------------------------------------------------------------------
# News Show SP2 - News display/Slider module by JoomShaper.com
# ------------------------------------------------------------------------
# Author    JoomShaper http://www.joomshaper.com
# Copyright (C) 2010 - 2013 JoomShaper.com. All Rights Reserved.
# @license - GNU/GPL V2 for PHP files. CSS / JS are Copyrighted Commercial
# Websites: http://www.joomshaper.com
-------------------------------------------------------------------------*/
// no direct access
defined( '_JEXEC' ) or die( 'Restricted access' );

$modId = $module->id;
if ($article_column>=$c_article_count):
	$article_column 	= $c_article_count;
	$article_row		= 1;
endif;
$date_time 				= '';
$row=0;
$i = 0;
$j = 0;
?>
<div id="ns2-<?php echo $modId; ?>" class="nssp2 ns2-<?php echo $uniqid ?>">
	<div class="ns2-wrap">
		<?php if ($c_article_count > 0): ?>
			<div id="sp-scroller<?php echo $uniqid; ?>" class="ns2-art-wrap <?php if ($links_block && $c_links_count!=0 && $links_position=="right"): ?> col-2 flt-left<?php endif; ?> carousel scale">			
				<div class="ns2-art-pages carousel-inner">
				<?php for($i=0;$i<$c_article_count;$i++): $row++; ?>
					<div class="ns2-page item <?php echo $j==0 ? 'active' : '' ?> ">
						<div class="ns2-page-inner">
						<?php for($j=0;$j<$article_row;$j++, $i++): ?>
							<div class="ns2-row <?php echo $j==0 ? 'ns2-first' : '' ?> <?php echo $j%2 ? 'ns2-even' : 'ns2-odd' ?>">
								<div class="ns2-row-inner row-fluid">
								<?php for($z=0;$z<$article_column;$z++, $i++): ?>
									<?php if ($i <$c_article_count): ?>
									<div class="ns2-column span<?php echo round(12/$article_column) ?>">
										<div style="padding:<?php echo $article_col_padding ?>">
											<div class="ns2-inner">
												<?php /*Date type blog*/ if ($article_date_format=='blog'): ?>
													<div class="ns2-date-blog">
														<?php
															$date_time = explode(' ', JHTML::_('date', $list[$i]->created, 'd M Y'));
															echo '<span class="ns2_date_day">' . $date_time[0] . '</span>';
															echo '<div class="ns2_date_month_year"><span class="ns2_date_month">' . $date_time[1] . '</span><span class="ns2_date_year">' . $date_time[2] . '</span></div>';
														?>
													</div>
												<?php endif; ?>												
											
												<div class="ns2-inner-image-wrapper"> <!-- ns2 image wrapper -->
													<?php /*Image position before title*/if ($article_show_image && $article_image_pos=='top' && $list[$i]->image): ?>
														<?php if ($article_linked_image): ?>
															<a class="ns2-image-wrapper" href="<?php echo $list[$i]->link ?>">
														<?php endif; ?>	
															<div class="img-overlay"></div>
															<img class="ns2-image" style="<?php echo $article_image_float ?>;<?php echo ($article_image_margin) ? "margin:$article_image_margin" : "" ?>" src="<?php echo modNSSP2CommonHelper::thumb($list[$i]->image, $article_thumb_width, $article_thumb_height, $article_thumb_ratio, $uniqid) ?>" alt="<?php echo $list[$i]->title ?>" title="<?php echo $list[$i]->title ?>" />
														<?php if ($article_linked_image): ?>		
															</a>
														<?php endif; ?>			
													<?php endif; ?>	

													<?php /*Comments, readmore, hits*/ if ($article_show_more || $article_hits || $article_comments): ?>
														<div class="ns2-links">
															<?php /*Comments*/ if ($article_comments):
																echo $list[$i]->comment;
															endif; ?>							
															<?php /*Hits*/ if ($article_hits): ?>
																<span class="ns2-hits"><?php echo JText::_('HITS_TEXT') . ':' . $list[$i]->hits ?></span>
															<?php endif; ?>

															<?php /*Readmore*/ if ($article_show_more): ?>
																<a class="ns2-readmore" href="<?php echo $list[$i]->link ?>"><span><?php echo $article_more_text ?></span></a>
															<?php endif; ?>
														</div>
													<?php endif; ?>
													<div style="clear:both"></div>			

												</div> <!-- ns2 image wrapper end-->										
												
												<?php /*Article title*/ if ($article_showtitle): ?>
													<h3 class="ns2-title">
														<?php if ($article_linkedtitle): ?>
															<a href="<?php echo $list[$i]->link ?>">
														<?php endif; ?>	
															<?php echo modNSSP2CommonHelper::cText($list[$i]->title, $article_count_title_text, $article_title_text_limit); ?>
														<?php if ($article_linkedtitle): ?>
															</a>
														<?php endif; ?>	
													</h3>
												<?php endif; ?>
												
												<?php /*Author, Category, date*/ if ($article_show_author || $article_date_format || $article_show_category): ?>
													<div class="ns2-tools">
														<?php /*Show Author*/ if ($article_show_author): ?>
															<div class="ns2-author">
																<?php echo '<span>' . JText::_('MODNS2_WRITTEN') . '</span>' . $list[$i]->author; ?>
															</div>
														<?php endif; ?>

														<?php /*Show category*/ if ($article_show_category): ?>
															<div class="ns2-category">
																<?php if ($article_show_author): ?>
																<span><?php echo JText::_('MODNS2_CATEGORY'); ?></span>
																<?php endif; ?>	
																<?php if ($article_linked_category): ?>
																	<a href="<?php echo $list[$i]->cat_link ?>">
																<?php endif; ?>	
																	<?php echo $list[$i]->category ?>
																<?php if ($article_linked_category): ?>
																	</a>
																<?php endif; ?>	
															</div>														
														<?php endif; ?>													
														
														<?php /*Show date*/ if (($article_date_format) && ($article_date_format!='blog')): ?>
															<div class="ns2-created">
																<?php if ($article_show_author || $article_show_category): ?>
																	<span><?php echo JText::_('MODNS2_CREATED') ?></span>
																<?php endif; ?>
																<?php echo JHTML::_('date', $list[$i]->created, JText::_($article_date_format)) ?>
															</div>
														<?php endif; ?>
													</div>
												<?php endif; ?>
	
												<?php /*Image position after title*/if ($article_show_image && $article_image_pos=='bottom' && $list[$i]->image): ?>
													<?php if ($article_linked_image): ?>
														<a href="<?php echo $list[$i]->link ?>">
													<?php endif; ?>	
														<img class="ns2-image" style="<?php echo $article_image_float ?>;<?php echo ($article_image_margin) ? "margin:$article_image_margin" : "" ?>" src="<?php echo modNSSP2CommonHelper::thumb($list[$i]->image, $article_thumb_width, $article_thumb_height, $article_thumb_ratio, $uniqid) ?>" alt="<?php echo $list[$i]->title ?>" title="<?php echo $list[$i]->title ?>" />
													<?php if ($article_linked_image): ?>		
														</a>
													<?php endif; ?>			
												<?php endif; ?>			
												
												<?php /*Ratings*/ if ($article_show_ratings): ?>
													<div class="ns2-rating">
														<div class="ns2-rating-bar">
															<div style="width:<?php echo $list[$i]->rating ?>%"></div>	
														</div>	
													</div>
												<?php endif; ?>

												<?php /*Introtext*/ if ($article_introtext): ?>
													<p class="ns2-introtext"><?php echo modNSSP2CommonHelper::cText($list[$i]->introtext, $article_count_intro_text, $article_intro_text_limit) ?></p>								
												<?php endif; ?>
												
												<div class="ns2-social">
													<?php /* Social Share */
														foreach (modNSSP2SocialHelper::icons($list[$i], $params) as $icon) {
															echo $icon;
														}
													?>
												</div>
												
												<?php /*Virtuemart*/ if ($art_show_price || $art_show_cart_button) : ?>
													<div class="ns2-vm-bar">
														<?php /*Show Price*/ if ($art_show_price) : ?>
															<p class="ns2-vm-price"><?php echo $list[$i]->price ?></p>
														<?php endif; ?>

														<?php /*Show Cart Button*/ if ($art_show_cart_button) : ?>
															<?php echo $list[$i]->addtocart ?>
														<?php endif; ?>
													</div>
												<?php endif; ?>
												
												<?php /*K2 Extra fields*/ if ($article_extra_fields && $content_source == 'k2' && count($list[$i]->extra_fields)): ?>
													<div style="clear:both"></div>
													<div class="NS2K2ExtraFields">
														<b><?php echo JText::_('Additional Info'); ?></b>
														<ul>
															<?php foreach ($list[$i]->extra_fields as $key=>$extraField): ?>
																<li class="type<?php echo ucfirst($extraField->type); ?> group<?php echo $extraField->group; ?> <?php echo strtolower($extraField->name) ?> <?php echo $key%2 ? 'even' : 'odd';?> <?php if ($key==0) echo 'first'; ?>">
																	<span class="label"><?php echo $extraField->name; ?></span>
																	<span class="value"><?php echo $extraField->value; ?></span>
																	<div style="clear:both"></div>
																</li>
															<?php endforeach; ?>
														</ul>
													</div>
													<div style="clear:both"></div>
												<?php endif; ?>								
												
												
											</div><!--/.row-fluid-->
										</div>
									</div>
									<?php endif; ?>
								<?php endfor; $i--; ?>
							</div>
							</div>
						<?php endfor; $i--; ?>
						<div style="clear:both"></div>
						</div><!--end ns2-page-inner-->
					</div>
				<?php endfor; ?>
				</div><!--/.carousel-inner-->

				<?php if($article_pagination) { ?>
					<ol class="carousel-indicators">
						<?php for ($i=0; $i < $row; $i++) { ?>
							<li data-target="#sp-scroller<?php echo $uniqid; ?>" data-slide-to="<?php echo $i; ?>" class="<?php echo ($i==0) ? 'active' : ''; ?>"></li>
						<?php } ?>
					</ol>
				<?php } ?>

				<?php if($article_arrows) { ?>
					<a class="prev" href="#sp-scroller<?php echo $uniqid; ?>" data-slide="prev"><i class="icon-angle-left"></i></a>
	  				<a class="next" href="#sp-scroller<?php echo $uniqid; ?>" data-slide="next"><i class="icon-angle-right"></i></a>
  				<?php } ?>
				
			</div>
		<?php endif; ?>
		<!--End article layout-->		
		<div style="clear:both"></div>
	</div>
</div>