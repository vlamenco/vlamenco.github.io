// 移动端菜单切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取菜单按钮和侧边栏元素
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    
    // 如果元素存在，则添加点击事件监听器
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('-translate-x-full');
        });
    }
    
    // 平滑滚动功能
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // 如果是移动端且菜单是打开的，则关闭菜单
                if (window.innerWidth < 768 && !sidebar.classList.contains('-translate-x-full')) {
                    sidebar.classList.add('-translate-x-full');
                }
            }
        });
    });
    
    // 图片加载错误处理
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            // 加载失败时显示默认图片
            this.src = 'assets/images/default-image.jpg';
            this.alt = '图片加载失败';
        });
    });
    
    // 导航栏滚动效果
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('shadow');
        } else {
            header.classList.remove('shadow');
        }
        
        lastScrollTop = scrollTop;
    });
});
