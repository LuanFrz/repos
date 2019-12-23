<div id="vipal_${instanceId}" ng-app="vipalnet" class="super-widget wcm-widget-class" data-params="vipal.instance()">

	<div class="fixed-sidebar">
		<div class="fixed-sidebar-left sidebar--small" id="sidebar-left">

			<a href="#!/feed" class="logo">
				<div class="img-wrap">
					
				</div>
			</a>

			<div class="mCustomScrollbar" data-mcs-theme="dark">
				<ul class="left-menu">
					<li>
						<a href="#" class="js-sidebar-open">
							<svg class="olymp-menu-icon left-menu-icon" data-toggle="tooltip" data-placement="right"
								data-original-title="Feed">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-menu-icon"></use>
							</svg>
						</a>
					</li>

					<li>
						<a href="#!/calendar">
							<svg class="olymp-calendar-icon left-menu-icon" data-toggle="tooltip" data-placement="right"
								data-original-title="Calendário Vipal">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-calendar-icon"></use>
							</svg>
						</a>
					</li>
					<li>
						<a href="#!/listmenu">
							<svg class="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right"
								data-original-title="Cardápio">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
			<a href="#" class="logo">
				<div class="img-wrap">
					<img src="/VP_NET/resources/js/app/assets/logo_image.png" alt="VipalNet">
				</div>
			</a>

			<div class="mCustomScrollbar" data-mcs-theme="dark">
				<ul class="left-menu">
					<li>
						<a href="#" class="js-sidebar-open">
							<svg class="olymp-close-icon left-menu-icon">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
							</svg>
							<span class="left-menu-title">Collapse Menu</span>
						</a>
					</li>
					<li>
						<a href="03-Newsfeed.html">
							<svg class="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right"
								data-original-title="NEWSFEED">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use>
							</svg>
							<span class="left-menu-title">Newsfeed</span>
						</a>
					</li>
					<li>
						<a href="20-CalendarAndEvents-MonthlyCalendar.html">
							<svg class="olymp-calendar-icon left-menu-icon" data-toggle="tooltip" data-placement="right"
								data-original-title="CALENDAR AND EVENTS">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-calendar-icon"></use>
							</svg>
							<span class="left-menu-title">Calendar and Events</span>
						</a>
					</li>
					<li>
						<a href="25-FriendsBirthday.html">
							<svg class="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right"
								data-original-title="Friends Birthdays">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use>
							</svg>
							<span class="left-menu-title">Friends Birthdays</span>
						</a>
					</li>
				</ul>

				<!--<div class="profile-completion">

					<div class="skills-item">
						<div class="skills-item-info">
							<span class="skills-item-title">Profile Completion</span>
							<span class="skills-item-count"><span class="count-animate" data-speed="1000"
									data-refresh-interval="50" data-to="76" data-from="0"></span><span
									class="units">76%</span></span>
						</div>
						<div class="skills-item-meter">
							<span class="skills-item-meter-active bg-primary" style="width: 76%"></span>
						</div>
					</div>

					<span>Complete <a href="#">your profile</a> so people can know more about you!</span>

				</div>-->
			</div>
		</div>
	</div>

	<!-- ... end Fixed Sidebar Left -->


	<!-- Fixed Sidebar Left -->

	<div class="fixed-sidebar fixed-sidebar-responsive">

		<div class="fixed-sidebar-left sidebar--small" id="sidebar-left-responsive">
			<a href="#" class="logo js-sidebar-open">
				<img src="/VP_NET/resources/js/app/assets/logo_image.png" alt="VipalNet">
			</a>

		</div>

		<div class="fixed-sidebar-left sidebar--large" id="sidebar-left-1-responsive">
			<a href="#" class="logo">
				<div class="img-wrap">
					<img src="/VP_NET/resources/js/app/assets/logo_image.png" alt="VipalNet">
				</div>
			</a>

			<div class="mCustomScrollbar" data-mcs-theme="dark">

				<div class="control-block">
					<div class="author-page author vcard inline-items">
						<div class="author-thumb">
							<img alt="author" ng-src="{{serverURL}}/social/api/rest/social/image/profile/{{userCode}}/SMALL_PICTURE" style="height: 40px;" class="avatar">
						</div>
						<a href="02-ProfilePage.html" class="author-name fn">
							<div class="author-title">
								James Spiegel <svg class="olymp-dropdown-arrow-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>
								</svg>
							</div>
						</a>
					</div>
				</div>

				<div class="ui-block-title ui-block-title-small">
					<h6 class="title">MAIN SECTIONS</h6>
				</div>

				<ul class="left-menu">
					<li>
						<a href="#" class="js-sidebar-open">
							<svg class="olymp-close-icon left-menu-icon">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
							</svg>
							<span class="left-menu-title">Collapse Menu</span>
						</a>
					</li>
					<li>
						<a href="mobile-index.html">
							<svg class="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right"
								data-original-title="NEWSFEED">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use>
							</svg>
							<span class="left-menu-title">Newsfeed</span>
						</a>
					</li>
					<li>
						<a href="Mobile-32-YourAccount-EducationAndEmployement.html">
							<svg class="olymp-calendar-icon left-menu-icon" data-toggle="tooltip" data-placement="right"
								data-original-title="CALENDAR AND EVENTS">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-calendar-icon"></use>
							</svg>
							<span class="left-menu-title">Calendar and Events</span>
						</a>
					</li>
					<li>
						<a href="Mobile-34-YourAccount-ChatMessages.html">
							<svg class="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right"
								data-original-title="Friends Birthdays">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use>
							</svg>
							<span class="left-menu-title">Friends Birthdays</span>
						</a>
					</li>
				</ul>

				<div class="ui-block-title ui-block-title-small">
					<h6 class="title">YOUR ACCOUNT</h6>
				</div>

				<ul class="account-settings">
					<li>
						<a href="#">

							<svg class="olymp-menu-icon">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-menu-icon"></use>
							</svg>

							<span>Profile Settings</span>
						</a>
					</li>
					<li>
						<a href="#">
							<svg class="olymp-logout-icon">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-logout-icon"></use>
							</svg>

							<span>Log Out</span>
						</a>
					</li>
				</ul>

				<div class="ui-block-title ui-block-title-small">
					<h6 class="title">About Olympus</h6>
				</div>

				<ul class="about-olympus">
					<li>
						<a href="#">
							<span>Terms and Conditions</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>FAQs</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Careers</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Contact</span>
						</a>
					</li>
				</ul>

			</div>
		</div>
	</div>

	<!-- ... end Fixed Sidebar Left -->


	<!-- Header-BP -->

	<header class="header" id="site-header">

		<div class="page-title">
                <img src="/VP_NET/resources/js/app/assets/logo_image.png" alt="Olympus" width="250px"> 
		</div>

		<div class="header-content-wrapper">
			<form class="search-bar w-search notification-list friend-requests">
				<div class="form-group with-button">
					<input class="form-control js-user-search" placeholder="Buscar aqui..." type="text">
					<button id='btnSearch'>
						<svg class="olymp-magnifying-glass-icon">
							<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use>
						</svg>
					</button>
				</div>
			</form>


			<div class="control-block">

				<div class="control-icon more has-items">
					<svg class="olymp-thunder-icon">
						<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-thunder-icon"></use>
					</svg>

					<div class="label-avatar bg-primary">8</div>

					<div class="more-dropdown more-with-triangle triangle-top-center">
						<div class="ui-block-title ui-block-title-small">
							<h6 class="title">Notificações</h6>
							<a href="#">Ler todas</a>
						</div>

						<div class="mCustomScrollbar" data-mcs-theme="dark">
							<ul class="notification-list">
								<li>
									<div class="author-thumb">
										<img src="/VP_NET/resources/js/app/libs/img/avatar62-sm.jpg" alt="author">
									</div>
									<div class="notification-event">
										<div><a href="#" class="h6 notification-friend">Mathilda Brinker</a> fez um novo comentário <a href="#" class="notification-link">profile status</a>.</div>
										<span class="notification-date"><time class="entry-date updated"
												datetime="2004-07-24T18:18">4 horas atrás</time></span>
									</div>
									<span class="notification-icon">
										<svg class="olymp-comments-post-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-comments-post-icon">
											</use>
										</svg>
									</span>

									<div class="more">
										<svg class="olymp-three-dots-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
										</svg>
										<svg class="olymp-little-delete">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-little-delete"></use>
										</svg>
									</div>
								</li>

								<li class="un-read">
									<div class="author-thumb">
										<img src="/VP_NET/resources/js/app/libs/img/avatar63-sm.jpg" alt="author">
									</div>
									<div class="notification-event">
										<div>You and <a href="#" class="h6 notification-friend">Nicholas Grissom</a>
											just became friends. Write on <a href="#" class="notification-link">his
												wall</a>.</div>
										<span class="notification-date"><time class="entry-date updated"
												datetime="2004-07-24T18:18">9 hours ago</time></span>
									</div>
									<span class="notification-icon">
										<svg class="olymp-happy-face-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
										</svg>
									</span>

									<div class="more">
										<svg class="olymp-three-dots-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
										</svg>
										<svg class="olymp-little-delete">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-little-delete"></use>
										</svg>
									</div>
								</li>

								<li class="with-comment-photo">
									<div class="author-thumb">
										<img src="/VP_NET/resources/js/app/libs/img/avatar64-sm.jpg" alt="author">
									</div>
									<div class="notification-event">
										<div><a href="#" class="h6 notification-friend">Sarah Hetfield</a> commented on
											your <a href="#" class="notification-link">photo</a>.</div>
										<span class="notification-date"><time class="entry-date updated"
												datetime="2004-07-24T18:18">Yesterday at 5:32am</time></span>
									</div>
									<span class="notification-icon">
										<svg class="olymp-comments-post-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-comments-post-icon">
											</use>
										</svg>
									</span>

									<div class="comment-photo">
										<img src="/VP_NET/resources/js/app/libs/img/comment-photo1.jpg" alt="photo">
										<span>“She looks incredible in that outfit! We should see each...”</span>
									</div>

									<div class="more">
										<svg class="olymp-three-dots-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
										</svg>
										<svg class="olymp-little-delete">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-little-delete"></use>
										</svg>
									</div>
								</li>

								<li>
									<div class="author-thumb">
										<img src="/VP_NET/resources/js/app/libs/img/avatar65-sm.jpg" alt="author">
									</div>
									<div class="notification-event">
										<div><a href="#" class="h6 notification-friend">Green Goo Rock</a> invited you
											to attend to his event Goo in <a href="#" class="notification-link">Gotham
												Bar</a>.</div>
										<span class="notification-date"><time class="entry-date updated"
												datetime="2004-07-24T18:18">March 5th at 6:43pm</time></span>
									</div>
									<span class="notification-icon">
										<svg class="olymp-happy-face-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
										</svg>
									</span>

									<div class="more">
										<svg class="olymp-three-dots-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
										</svg>
										<svg class="olymp-little-delete">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-little-delete"></use>
										</svg>
									</div>
								</li>

								<li>
									<div class="author-thumb">
										<img src="/VP_NET/resources/js/app/libs/img/avatar66-sm.jpg" alt="author">
									</div>
									<div class="notification-event">
										<div><a href="#" class="h6 notification-friend">James Summers</a> commented on
											your new <a href="#" class="notification-link">profile status</a>.</div>
										<span class="notification-date"><time class="entry-date updated"
												datetime="2004-07-24T18:18">March 2nd at 8:29pm</time></span>
									</div>
									<span class="notification-icon">
										<svg class="olymp-heart-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
										</svg>
									</span>

									<div class="more">
										<svg class="olymp-three-dots-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
										</svg>
										<svg class="olymp-little-delete">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-little-delete"></use>
										</svg>
									</div>
								</li>
							</ul>
						</div>

						<a href="#" class="view-all bg-blue">View All Notifications</a>
					</div>
				</div>

				<div class="author-page author vcard inline-items more">
					<div class="author-thumb">
						<img alt="author" ng-src="{{serverURL}}/social/api/rest/social/image/profile/{{userCode}}/SMALL_PICTURE" class="avatar" style="height:40px;">
						<div class="more-dropdown more-with-triangle">
							<div class="mCustomScrollbar" data-mcs-theme="dark">
								<div class="ui-block-title ui-block-title-small">
									<h6 class="title">Meu perfil</h6>
								</div>

								<ul class="account-settings">
									<li>
										<a href="29-YourAccount-AccountSettings.html">

											<svg class="olymp-menu-icon">
												<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-menu-icon"></use>
											</svg>

											<span>Perfil</span>
										</a>
									</li>
									<li>
										<a href="#">
											<svg class="olymp-logout-icon">
												<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-logout-icon"></use>
											</svg>

											<span>Sair</span>
										</a>
									</li>
								</ul>
								
							</div>

						</div>
					</div>
					<a href="02-ProfilePage.html" class="author-name fn">
						<div class="author-title">
							{{userName}}<svg class="olymp-dropdown-arrow-icon">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>
							</svg>
						</div>
					</a>
				</div>

			</div>
		</div>

	</header>

	<!-- ... end Header-BP -->


	<!-- Responsive Header-BP -->

	<header class="header header-responsive" id="site-header-responsive">

		<div class="header-content-wrapper">
			<ul class="nav nav-tabs mobile-app-tabs" role="tablist">
				<li class="nav-item">
					<a class="nav-link" data-toggle="tab" href="#request" role="tab">
						<div class="control-icon has-items">
							<svg class="olymp-happy-face-icon">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
							</svg>
							<div class="label-avatar bg-blue">6</div>
						</div>
					</a>
				</li>

				<li class="nav-item">
					<a class="nav-link" data-toggle="tab" href="#notification" role="tab">
						<div class="control-icon has-items">
							<svg class="olymp-thunder-icon">
								<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-thunder-icon"></use>
							</svg>
							<div class="label-avatar bg-primary">8</div>
						</div>
					</a>
				</li>

				<li class="nav-item">
					<a class="nav-link" data-toggle="tab" href="#search" role="tab">
						<svg class="olymp-magnifying-glass-icon">
							<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use>
						</svg>
						<svg class="olymp-close-icon">
							<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
						</svg>
					</a>
				</li>
			</ul>
		</div>

		<!-- Tab panes -->
		<div class="tab-content tab-content-responsive">

			<div class="tab-pane " id="request" role="tabpanel">

				<div class="mCustomScrollbar" data-mcs-theme="dark">
					<div class="ui-block-title ui-block-title-small">
						<h6 class="title">FRIEND REQUESTS</h6>
						<a href="#">Find Friends</a>
					</div>
					<ul class="notification-list friend-requests">
						<li>
							<div class="author-thumb">
								<img src="/VP_NET/resources/js/app/libs/img/avatar55-sm.jpg" alt="author">
							</div>
							<div class="notification-event">
								<a href="#" class="h6 notification-friend">Tamara Romanoff</a>
								<span class="chat-message-item">Mutual Friend: Sarah Hetfield</span>
							</div>
							<span class="notification-icon">
								<a href="#" class="accept-request">
									<span class="icon-add without-text">
										<svg class="olymp-happy-face-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
										</svg>
									</span>
								</a>

								<a href="#" class="accept-request request-del">
									<span class="icon-minus">
										<svg class="olymp-happy-face-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
										</svg>
									</span>
								</a>

							</span>

							<div class="more">
								<svg class="olymp-three-dots-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg>
							</div>
						</li>
						<li>
							<div class="author-thumb">
								<img src="/VP_NET/resources/js/app/libs/img/avatar56-sm.jpg" alt="author">
							</div>
							<div class="notification-event">
								<a href="#" class="h6 notification-friend">Tony Stevens</a>
								<span class="chat-message-item">4 Friends in Common</span>
							</div>
							<span class="notification-icon">
								<a href="#" class="accept-request">
									<span class="icon-add without-text">
										<svg class="olymp-happy-face-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
										</svg>
									</span>
								</a>

								<a href="#" class="accept-request request-del">
									<span class="icon-minus">
										<svg class="olymp-happy-face-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
										</svg>
									</span>
								</a>

							</span>

							<div class="more">
								<svg class="olymp-three-dots-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg>
							</div>
						</li>
						<li class="accepted">
							<div class="author-thumb">
								<img src="/VP_NET/resources/js/app/libs/img/avatar57-sm.jpg" alt="author">
							</div>
							<div class="notification-event">
								You and <a href="#" class="h6 notification-friend">Mary Jane Stark</a> just became
								friends. Write on <a href="#" class="notification-link">her wall</a>.
							</div>
							<span class="notification-icon">
								<svg class="olymp-happy-face-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
								</svg>
							</span>

							<div class="more">
								<svg class="olymp-three-dots-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg>
								<svg class="olymp-little-delete">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-little-delete"></use>
								</svg>
							</div>
						</li>
						<li>
							<div class="author-thumb">
								<img src="/VP_NET/resources/js/app/libs/img/avatar58-sm.jpg" alt="author">
							</div>
							<div class="notification-event">
								<a href="#" class="h6 notification-friend">Stagg Clothing</a>
								<span class="chat-message-item">9 Friends in Common</span>
							</div>
							<span class="notification-icon">
								<a href="#" class="accept-request">
									<span class="icon-add without-text">
										<svg class="olymp-happy-face-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
										</svg>
									</span>
								</a>

								<a href="#" class="accept-request request-del">
									<span class="icon-minus">
										<svg class="olymp-happy-face-icon">
											<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
										</svg>
									</span>
								</a>

							</span>
							<div class="more">
								<svg class="olymp-three-dots-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg>
							</div>
						</li>
					</ul>
					<a href="#" class="view-all bg-blue">Check all your Events</a>
				</div>

			</div>

			<div class="tab-pane " id="notification" role="tabpanel">

				<div class="mCustomScrollbar" data-mcs-theme="dark">
					<div class="ui-block-title ui-block-title-small">
						<h6 class="title">Notifications</h6>
						<a href="#">Mark all as read</a>
						<a href="#">Settings</a>
					</div>

					<ul class="notification-list">
						<li>
							<div class="author-thumb">
								<img src="/VP_NET/resources/js/app/libs/img/avatar62-sm.jpg" alt="author">
							</div>
							<div class="notification-event">
								<div><a href="#" class="h6 notification-friend">Mathilda Brinker</a> commented on your
									new <a href="#" class="notification-link">profile status</a>.</div>
								<span class="notification-date"><time class="entry-date updated"
										datetime="2004-07-24T18:18">4 hours ago</time></span>
							</div>
							<span class="notification-icon">
								<svg class="olymp-comments-post-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
								</svg>
							</span>

							<div class="more">
								<svg class="olymp-three-dots-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg>
								<svg class="olymp-little-delete">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-little-delete"></use>
								</svg>
							</div>
						</li>

						<li class="un-read">
							<div class="author-thumb">
								<img src="/VP_NET/resources/js/app/libs/img/avatar63-sm.jpg" alt="author">
							</div>
							<div class="notification-event">
								<div>You and <a href="#" class="h6 notification-friend">Nicholas Grissom</a> just became
									friends. Write on <a href="#" class="notification-link">his wall</a>.</div>
								<span class="notification-date"><time class="entry-date updated"
										datetime="2004-07-24T18:18">9 hours ago</time></span>
							</div>
							<span class="notification-icon">
								<svg class="olymp-happy-face-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
								</svg>
							</span>

							<div class="more">
								<svg class="olymp-three-dots-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg>
								<svg class="olymp-little-delete">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-little-delete"></use>
								</svg>
							</div>
						</li>

						<li class="with-comment-photo">
							<div class="author-thumb">
								<img src="/VP_NET/resources/js/app/libs/img/avatar64-sm.jpg" alt="author">
							</div>
							<div class="notification-event">
								<div><a href="#" class="h6 notification-friend">Sarah Hetfield</a> commented on your <a
										href="#" class="notification-link">photo</a>.</div>
								<span class="notification-date"><time class="entry-date updated"
										datetime="2004-07-24T18:18">Yesterday at 5:32am</time></span>
							</div>
							<span class="notification-icon">
								<svg class="olymp-comments-post-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
								</svg>
							</span>

							<div class="comment-photo">
								<img src="/VP_NET/resources/js/app/libs/img/comment-photo1.jpg" alt="photo">
								<span>“She looks incredible in that outfit! We should see each...”</span>
							</div>

							<div class="more">
								<svg class="olymp-three-dots-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg>
								<svg class="olymp-little-delete">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-little-delete"></use>
								</svg>
							</div>
						</li>

						<li>
							<div class="author-thumb">
								<img src="/VP_NET/resources/js/app/libs/img/avatar65-sm.jpg" alt="author">
							</div>
							<div class="notification-event">
								<div><a href="#" class="h6 notification-friend">Green Goo Rock</a> invited you to attend
									to his event Goo in <a href="#" class="notification-link">Gotham Bar</a>.</div>
								<span class="notification-date"><time class="entry-date updated"
										datetime="2004-07-24T18:18">March 5th at 6:43pm</time></span>
							</div>
							<span class="notification-icon">
								<svg class="olymp-happy-face-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
								</svg>
							</span>

							<div class="more">
								<svg class="olymp-three-dots-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg>
								<svg class="olymp-little-delete">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-little-delete"></use>
								</svg>
							</div>
						</li>

						<li>
							<div class="author-thumb">
								<img src="/VP_NET/resources/js/app/libs/img/avatar66-sm.jpg" alt="author">
							</div>
							<div class="notification-event">
								<div><a href="#" class="h6 notification-friend">James Summers</a> commented on your new
									<a href="#" class="notification-link">profile status</a>.</div>
								<span class="notification-date"><time class="entry-date updated"
										datetime="2004-07-24T18:18">March 2nd at 8:29pm</time></span>
							</div>
							<span class="notification-icon">
								<svg class="olymp-heart-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
								</svg>
							</span>

							<div class="more">
								<svg class="olymp-three-dots-icon">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg>
								<svg class="olymp-little-delete">
									<use xlink:href="/VP_NET/resources/js/app/libs/svg-icons/sprites/icons.svg#olymp-little-delete"></use>
								</svg>
							</div>
						</li>
					</ul>

					<a href="#" class="view-all bg-blue">View All Notifications</a>
				</div>

			</div>

			<div class="tab-pane " id="search" role="tabpanel">


				<form class="search-bar w-search notification-list friend-requests">
					<div class="form-group with-button">
						<input class="form-control js-user-search" placeholder="Search here people or pages..."
							type="text">
					</div>
				</form>


			</div>

		</div>
		<!-- ... end  Tab panes -->

	</header>

	<!-- ... end Responsive Header-BP -->
	<div class="header-spacer"></div>


  <ui-view></ui-view>


	<a class="back-to-top" href="#">
		<img src="/VP_NET/resources/js/app/libs/svg-icons/back-to-top.svg" alt="arrow" class="back-icon">
	</a>

</div>

