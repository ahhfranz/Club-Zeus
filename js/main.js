document.addEventListener('DOMContentLoaded', (e) => {
    /* Menu Active Codes */
    const targets = document.querySelectorAll('[data-target]');

    targets.forEach(element => {
        element.addEventListener('click', () => {
            const target = document.querySelector(element.dataset.target);

            targets.forEach(element2 => {
                const target2 = document.querySelector(element2.dataset.target);
                element2.style.color = 'var(--menu_text_color)';
                target2.style.display = 'none';
            });

            element.style.color = 'var(--menu_active_text_color)';
            target.style.display = 'flex';
        })
    });

    const wppform = document.getElementById('wppform');

    wppform.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        const user = document.getElementById('user');
        const password = ''; // 'document.getElementById('password');

        if (user.value === '' || password.value === '') {
            alert('Por favor, completa el Usuario y la Contraseña.');

            return false;
        }

        const phone = '5491162089720';      
let msg = ' 🍀 ¡Hola! Quiero mi usuario y el bonus de bienvenida:\n';
        msg += '*Nombre:* ' + user.value + "\n";
       

        const wppLink = `send?text=${encodeURIComponent(msg)}&phone=${phone}&type=phone_number&app_absent=0`;
        console.log(wppLink);

        if (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
            navigator.userAgent.match(/Opera Mini/i) ||
            navigator.userAgent.match(/IEMobile/i)
        ) {
            window.location.href = 'whatsapp://' + wppLink;
        } else {
            window.open('https://web.whatsapp.com/' + wppLink);
        }

        return false;
    });
});