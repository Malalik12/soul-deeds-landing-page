import React from 'react';

const SoulDeedsLogo: React.FC = () => (
  <div>
    <img 
      src="/images/footer-logo.png" 
      alt="Soul Deeds Logo" 
      className="h-10 w-auto" 
    />
  </div>
);

const FacebookIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>;
const InstagramIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664 4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>;
const TwitterIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.634 4.208 3.803 4.649-.624.169-1.282.226-1.961.226-.299 0-.588-.028-.875-.083.598 1.863 2.333 3.218 4.394 3.255-1.728 1.35-3.895 2.12-6.262 2.12-.407 0-.809-.024-1.205-.072 2.167 1.391 4.759 2.212 7.548 2.212 9.058 0 14.01-7.502 14.01-14.01 0-.213-.005-.426-.014-.637.962-.695 1.797-1.562 2.457-2.548z"/></svg>;
const YoutubeIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>;

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#8B268F] text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div>
            <SoulDeedsLogo />
            <p className="mt-4 text-purple-200 text-sm leading-relaxed">
              Soul Deeds is a community-driven platform designed to bring people together through shared values, meaningful projects, and a purpose-led approach.
            </p>
            <div className="flex items-center space-x-3 mt-6">
                <a href="#" className="text-purple-200 hover:text-white transition-colors"><FacebookIcon/></a>
                <span className="text-purple-300/50">|</span>
                <a href="#" className="text-purple-200 hover:text-white transition-colors"><InstagramIcon/></a>
                <span className="text-purple-300/50">|</span>
                <a href="#" className="text-purple-200 hover:text-white transition-colors"><TwitterIcon/></a>
                <span className="text-purple-300/50">|</span>
                <a href="#" className="text-purple-200 hover:text-white transition-colors"><YoutubeIcon/></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">QUICK LINKS</h4>
            <ul className="space-y-3 text-purple-200">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">NEWS LETTER</h4>
            <p className="text-purple-200 text-sm mb-4">
              Subscribe our newsletter to get our latest update & news
            </p>
            <form>
               <div className="flex w-full items-center rounded-lg border-2 border-white bg-white overflow-hidden focus-within:ring-2 focus-within:ring-purple-400/50">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full appearance-none bg-transparent py-3 px-4 text-gray-700 placeholder-gray-500 leading-tight focus:outline-none"
                    />
                    <button type="submit" className="bg-[#8B268F] text-white p-3 self-stretch flex items-center hover:bg-opacity-90 border-2 border-white -m-px rounded-r-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M3 3l18 9-18 9v-18zm2 3.335v11.33l10.224-5.665-10.224-5.665z"/>
                        </svg>
                    </button>
                </div>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 lg:px-12 py-6 text-center text-purple-200 text-sm">
          &copy; Copyright 2025. Soul Deeds. All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;