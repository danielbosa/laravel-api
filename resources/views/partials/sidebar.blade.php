<nav id="sidebar">
    <ul class="">
        <li class="nav-link ">
            <a href="http://localhost:5174" class="nav-link ">
                <i class="fa-solid fa-house"></i>
                <span> MyPortfolio</span>
            </a>
        </li>
        {{-- <li class="{{Route::currentRouteName() == 'home' ? 'active' : ''}}">
            <a href="/" class="nav-link ">
                <i class="fa-solid fa-house"></i>
                <span> Home</span>
            </a>
        </li> --}}
        <li class="{{Route::currentRouteName() == 'admin.dashboard' ? 'active' : ''}}">
            <a href="/admin" class="nav-link">
                <i class="fa-solid fa-chart-simple"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <li class="{{Route::currentRouteName() == 'admin.projects.index' ? 'active' : ''}}">
            <a href="/admin/projects" class="nav-link">
                <i class="fa-solid fa-signal"></i>
                <span>Projects</span>
            </a>
        </li>
        <li class="{{Route::currentRouteName() == 'admin.types.index' ? 'active' : ''}}">
            <a href="/admin/types" class="nav-link">
                <i class="fa-solid fa-layer-group"></i>
                <span>Types</span>
            </a>
        </li>
        <li class="{{Route::currentRouteName() == 'admin.technologies.index' ? 'active' : ''}}">
            <a href="/admin/technologies" class="nav-link">
                <i class="fa-solid fa-tags"></i>
                <span>Technologies</span>
            </a>
        </li>
    </ul>
</nav>