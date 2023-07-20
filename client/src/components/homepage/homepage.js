import "./homepage.css"

const Homepage = ({setLoginUser}) => {

    return (
        <div className="homepage">
            <div className='body'>
                {/* bagian header template */}
                <div className="header">
                    <h1 className="judul">Malas Ngoding's Blog</h1>
                    <p className="deskripsi">Tutorial pemrograman web, mobile dan desktop lengkap berbahasa indonesia. dari dasar hingga mahir.</p>
                </div>
                {/* akhir bagian header template */}

                <div className="wrap">
                    {/* bagian menu		 */}
                    <nav className="menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Tutorial</a></li>
                            <li><a href="#">Kontak</a></li>
                            <li className="logout"><a href="#logout" onClick={() => setLoginUser({})}><strong>Logout</strong></a></li>
                        </ul>
                    </nav>
                    {/* akhir bagian menu */}
                    {/* bagian sidebar website */}
                    <aside className="sidebar">
                        <div className="widget">
                            <h2>Tutorial</h2>
                            <p>Selamat datang di www.malasngoding.com, situs ini menyediakan tutorial pemrograman web, mobile &amp; desktop.</p>
                        </div>
                        <div className="widget">
                            <h2>Ebook Gratis</h2>
                            <p>Teman-teman bisa mendapatkan ebook tutorial gratis di sini <a target="_blank" href="https://www.malasngoding.com">www.malasngoding.com</a>.</p>
                        </div>
                    </aside>
                    {/* akhir bagian sidebar website */}
                    {/* bagian konten Blog */}
                    <div className="blog">
                        <div className="conteudo">
                            <div className="post-info">
                            Di Posting Oleh <b>Diki Alfarabi Hadi</b>
                            </div>
                            <img src="https://www.malasngoding.com/wp-content/uploads/2016/02/tutorial-css-bahasa-indonesia.png" />
                            <h1> Template Sederhana HTML &amp; CSS </h1>
                            <hr />
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>				
                            <a href="#" className="continue-lendo">Selengkapnya →</a>
                        </div>
                        <div className="conteudo">
                            <div className="post-info">
                            Di Posting Oleh <b>Diki Alfarabi Hadi</b>
                            </div>
                            <img src="https://www.malasngoding.com/wp-content/uploads/2016/02/tutorial-html-bahasa-indonesia.png" />
                            <h1> Belajar HTML Lengkap </h1>
                            <hr />
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>				
                            <a href="#" className="continue-lendo">Selengkapnya →</a>
                        </div>
                    </div>
                    {/* akhir bagian konten Blog */}
                </div>
            </div>
        </div>
    )
}

export default Homepage