const Footer = () => {
    return (
        <div className='container'>
            <footer className='py-3 my-4'>
                <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                    <li className='nav-item'>
                        <a href='/' className='nav-link px-2 text-muted'>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/tiket' className='nav-link px-2 text-muted'>
                            Tiket
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/izvlacenje' className='nav-link px-2 text-muted'>
                            Izvlacenje
                        </a>
                    </li>
                </ul>
                <p className='text-center text-muted'>© 2021 The Sharks</p>
            </footer>
        </div>
    );
};

export default Footer;