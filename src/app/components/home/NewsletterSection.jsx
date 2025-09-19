import React from 'react';
import { Button } from '../../components/ui/button';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: "url('/images/newsletter-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          خليك على اطلاع بجديدنا
        </h2>
        <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
          انضم لعائلتنا وتوصل بعروض حصرية، وصفات لذيذة، وكل ما هو جديد في عالم العسل مباشرة لبريدك الإلكتروني.
        </p>
        
        {/* --- التغيير المهم هنا --- */}
        <form 
          action="https://gmail.us7.list-manage.com/subscribe/post?u=ffe8b674220faa5f1dca2c5cd&id=4880f93cab&f_id=002dc1e4f0" 
          method="POST"
          target="_blank"
          className="max-w-xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            
            <input
              type="email"
              name="EMAIL" // <-- مهم لـ Mailchimp
              placeholder="أدخل بريدك الإلكتروني"
              className="w-full pl-6 pr-12 py-4 rounded-full border-0 focus:ring-2 focus:ring-amber-400 text-lg text-right"
              required
            />
            
            {/* هاد الجزء مهم باش يتفادى الروبوتات */}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_ffe8b674220faa5f1dca2c5cd_4880f93cab" tabIndex="-1" defaultValue="" />
            </div>

            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Button type="submit" className="rounded-full bg-amber-500 hover:bg-amber-600 px-8 py-3 h-auto text-md">
                اشتراك
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;