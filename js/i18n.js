/* WOODY – English / Arabic. Translates interface text in place (no reload).
   Anything not listed below (brand, product names) stays in English. */
(()=>{
const AR={
'Home':'الرئيسية','Shop':'المتجر','Collections':'المجموعات','About Us':'من نحن','Contact':'اتصل بنا','Wishlist':'المفضلة','Search':'بحث','Cart':'السلة','Menu':'القائمة','Account':'الحساب','Settings':'الإعدادات','Close':'إغلاق',
'Search WOODY':'ابحث في WOODY','Search products':'ابحث عن المنتجات','Close search':'إغلاق البحث',
'Bring Warmth Into Your Home.':'اجعل الدفء يملأ بيتك.',
'Discover timeless furniture and carefully crafted decor designed to make every space feel special.':'اكتشف أثاثاً خالداً وديكوراً مصنوعاً بعناية، ليمنح كل مساحة في بيتك إحساساً خاصاً.',
'Explore Collection':'استكشف المجموعة','Discover WOODY':'اكتشف WOODY',
'Shop by category':'تسوّق حسب الفئة','Six ways into the WOODY collection.':'ست بوابات إلى عالم WOODY.',
'Coffee Corners':'أركان القهوة','Wooden Furniture':'أثاث خشبي','Home Accessories':'إكسسوارات المنزل','Wall Decor':'ديكور الجدران','Storage & Organization':'التخزين والتنظيم','Custom Designs':'تصاميم مخصصة','Explore':'استكشف',
'Selected pieces':'قطع مختارة','View all products':'عرض كل المنتجات','Featured product':'منتج مميز','Discover Product':'اكتشف المنتج','Featured':'مميز','Sale':'تخفيض',
'A wooden coffee station with an upper shelf, mug hooks, a small side shelf and a base tray.':'ركن قهوة خشبي متكامل: رف علوي، وخطافات للأكواب، ورف جانبي صغير، وصينية في القاعدة.',
'A wooden back panel with four hooks to hang your favorite mugs, with a small shelf below.':'لوح خلفي خشبي بأربعة خطافات لتعليق أكوابك المفضلة، مع رف صغير أسفله.',
'An arched wooden sign with engraved lettering for your coffee corner.':'لوحة خشبية مقوّسة بكتابة محفورة تزيّن ركن القهوة لديك.',
'A white framed sign with a wooden border, a charming touch for shelves and walls.':'لوحة بيضاء بإطار خشبي، لمسة جذابة للرفوف والجدران.',
'A low wooden tray that keeps jars, capsules and spoons neatly in one place.':'صينية خشبية منخفضة تحفظ البرطمانات والكبسولات والملاعق مرتبة في مكان واحد.',
'Glass jars with wooden lids for coffee beans, sugar and everyday essentials.':'برطمانات زجاجية بأغطية خشبية لحبوب القهوة والسكر ومستلزماتك اليومية.',
'Warm natural light, everyday ritual.':'ضوء طبيعي دافئ، وطقس يومي جميل.',
'Crafted With Passion. Designed For Living.':'صُنع بشغف. صُمّم للحياة.',
'WOODY brings natural beauty, everyday function and timeless wooden design into modern homes.':'تقدّم WOODY جمال الطبيعة ووظيفية الاستخدام اليومي وتصاميم الخشب الخالدة إلى البيوت العصرية.',
'Each piece is chosen to feel warm and calm in a room: honest materials, clean lines and details that reward a closer look.':'تُختار كل قطعة لتمنح الغرفة دفئاً وهدوءاً: خامات أصيلة، وخطوط نظيفة، وتفاصيل تستحق التأمل.',
'Shop the collection':'تسوّق المجموعة',
'Why choose WOODY?':'لماذا WOODY؟',
'Quality Craftsmanship':'حرفية عالية الجودة','Solid, well-finished wooden pieces made to be used every day.':'قطع خشبية متينة بتشطيب متقن، صُنعت لتُستخدم كل يوم.',
'Timeless Designs':'تصاميم خالدة','Simple shapes that stay relevant as your home changes.':'أشكال بسيطة تبقى أنيقة مهما تغيّر بيتك.',
'Customizable Products':'منتجات قابلة للتخصيص','Choose finishes and sizes to suit your space.':'اختر التشطيب والمقاس بما يناسب مساحتك.',
'Attention to Every Detail':'عناية بكل تفصيلة','From hooks to edges, the small things are considered.':'من الخطافات إلى الحواف، كل التفاصيل الصغيرة محسوبة.',
'Natural wooden furniture and carefully crafted decor for modern homes.':'أثاث خشبي طبيعي وديكور مصنوع بعناية للبيوت العصرية.',
'Support':'الدعم','Shipping & returns':'الشحن والاسترجاع','Care guide':'دليل العناية','FAQ':'الأسئلة الشائعة','Newsletter':'النشرة البريدية','Your email':'بريدك الإلكتروني','Email':'البريد الإلكتروني','Subscribe':'اشتراك','Follow:':'تابعنا:',
'© 2026 WOODY – Modern Furniture & Decor. All rights reserved.':'© 2026 WOODY – Modern Furniture & Decor. جميع الحقوق محفوظة.',
'Sample prices and product details are placeholders.':'الأسعار وتفاصيل المنتجات الحالية أمثلة قابلة للتعديل.',
'All':'الكل','Price: low to high':'السعر: من الأقل إلى الأعلى','Price: high to low':'السعر: من الأعلى إلى الأقل','Name':'الاسم','Sort':'الترتيب',
'No products match. Try a different search or category.':'لا توجد منتجات مطابقة. جرّب بحثاً أو فئة مختلفة.',
'View Details':'عرض التفاصيل','Add to Cart':'أضف إلى السلة','In Wishlist':'في المفضلة',
'Quantity':'الكمية','Less':'أقل','More':'أكثر','Category':'الفئة','Material':'الخامة','Finish':'التشطيب','Size':'المقاس','Dimensions':'الأبعاد','Sample: add your own':'مثال: أضف أبعادك',
'Bamboo':'خيزران','Solid wood':'خشب صلب','Wood frame':'إطار خشبي','Glass + wood lid':'زجاج بغطاء خشبي',
'Natural Bamboo':'خيزران طبيعي','Warm Oak':'بلوط دافئ','Dark Walnut':'جوز داكن','Compact':'صغير','Standard':'قياسي','Large':'كبير',
'Finish previews are shown when matching photos are added. Prices and details are editable samples.':'تظهر معاينات التشطيبات عند إضافة الصور المطابقة. الأسعار والتفاصيل أمثلة قابلة للتعديل.',
'You may also like':'قد يعجبك أيضاً',
'Nothing saved yet. Tap the heart on any product.':'لا يوجد شيء محفوظ بعد. اضغط على القلب في أي منتج.',
'Your cart':'سلة التسوق','Your cart is empty.':'سلتك فارغة.','Start shopping':'ابدأ التسوق','Remove':'إزالة','Order summary':'ملخص الطلب','Subtotal':'المجموع الفرعي','Shipping':'الشحن','Free':'مجاني','Total':'الإجمالي','Checkout':'إتمام الطلب',
'Contact & delivery':'بيانات التواصل والتوصيل','First name':'الاسم الأول','Last name':'اسم العائلة','Address':'العنوان','City':'المدينة','Postal code':'الرمز البريدي','Payment':'الدفع','Cash on delivery':'الدفع عند الاستلام','Card (connect your payment provider)':'بطاقة (اربط مزوّد الدفع الخاص بك)','Place order':'تأكيد الطلب',
'Save my address for future orders.':'احفظ عنواني للطلبات القادمة.',
'Thank you for your order.':'شكراً لطلبك.','A confirmation will be sent to your email. This is a demo checkout.':'سيصلك تأكيد على بريدك الإلكتروني. هذه تجربة دفع تجريبية.','Back to home':'العودة إلى الرئيسية',
'Added to cart':'تمت الإضافة إلى السلة','Saved to wishlist':'تمت الإضافة إلى المفضلة','Removed from wishlist':'تمت الإزالة من المفضلة','Thanks for subscribing':'شكراً لاشتراكك',
'Order placed successfully':'تم تأكيد طلبك بنجاح','Address saved':'تم حفظ العنوان','Address updated':'تم تحديث العنوان','Address deleted':'تم حذف العنوان','Logged in':'تم تسجيل الدخول','Account created':'تم إنشاء الحساب','You are logged out.':'تم تسجيل الخروج.',
'Language':'اللغة','Website Notifications':'إشعارات الموقع','Show confirmations for cart, address and order actions.':'إظهار رسائل تأكيد عند إضافة المنتجات وحفظ العنوان وإتمام الطلب.',
'Saved address':'العنوان المحفوظ','No saved address yet.':'لا يوجد عنوان محفوظ بعد.','Add an address to speed up checkout.':'أضف عنواناً لتسريع إتمام الطلب.','Add address':'إضافة عنوان','Edit':'تعديل','Replace':'استبدال','Delete':'حذف','Save address':'حفظ العنوان','Cancel':'إلغاء',
'Saved on this device only. Log in to keep it with your account.':'يُحفظ على هذا الجهاز فقط. سجّل الدخول لربطه بحسابك.','Saved to your account.':'محفوظ في حسابك.',
'Could not save the address. Please try again.':'تعذّر حفظ العنوان. حاول مرة أخرى.','Please fill in all address fields.':'يرجى تعبئة جميع حقول العنوان.',
'Login':'تسجيل الدخول','Sign Up':'إنشاء حساب','Email address':'البريد الإلكتروني','Password':'كلمة المرور','Forgot password?':'هل نسيت كلمة المرور؟','Full name':'الاسم الكامل','Confirm password':'تأكيد كلمة المرور','Create Account':'إنشاء الحساب',
'Continue with Google':'المتابعة عبر Google','Continue with GitHub':'المتابعة عبر GitHub','or':'أو','Log out':'تسجيل الخروج','Account details':'تفاصيل الحساب','Manage saved address':'إدارة العنوان المحفوظ',
'Sign-in is not set up yet. Add your Supabase keys in js/config.js — see README.':'تسجيل الدخول غير مُفعّل بعد. أضف مفاتيح Supabase في js/config.js — راجع ملف README.',
'Passwords do not match.':'كلمتا المرور غير متطابقتين.','Password must be at least 8 characters.':'يجب ألا تقل كلمة المرور عن 8 أحرف.','Enter your email first.':'أدخل بريدك الإلكتروني أولاً.',
'Password reset email sent.':'تم إرسال رسالة إعادة تعيين كلمة المرور.','Check your email to confirm your account.':'تحقق من بريدك الإلكتروني لتأكيد الحساب.',
'Invalid login credentials':'بيانات الدخول غير صحيحة.','User already registered':'هذا البريد مسجّل بالفعل.'
};
const PAT=[
[/^Finish: (.+)$/,x=>'التشطيب: '+T(x[1])],
[/^Size: (.+)$/,x=>'المقاس: '+T(x[1])],
[/^← Shop \/ (.+)$/,x=>'→ المتجر / '+T(x[1])],
[/^From (.+)$/,x=>'ابتداءً من '+x[1]],
[/^(.+) · (.+)$/,x=>T(x[1])+' · '+T(x[2])],
[/^Image (\d+)$/,x=>'صورة '+x[1]]];
const AT=['placeholder','aria-label','title','alt'];
let lang='en';const rec=new WeakMap();
function T(c){if(AR[c])return AR[c];for(const[re,f]of PAT){const x=c.match(re);if(x)return f(x)}
 const ss=c.match(/[^.!?]+[.!?]+\s*|[^.!?]+$/g);if(ss&&ss.length>1){let ch=false;const o=ss.map(z=>{const t=z.trim(),a=AR[t];if(a){ch=true;return a}return t});return ch?o.join(' '):c}return c}
function tr(s){const m=s.match(/^(\s*)([\s\S]*?)(\s*)$/);if(!m[2])return s;const r=T(m[2]);return r===m[2]?s:m[1]+r+m[3]}
function tx(n){const v=n.nodeValue,r=rec.get(n);
 if(r&&(v===r.ar||v===r.en)){const w=lang==='ar'?r.ar:r.en;if(v!==w)n.nodeValue=w;return}
 if(!v.trim())return;const ar=tr(v);rec.set(n,{en:v,ar});if(lang==='ar'&&ar!==v)n.nodeValue=ar}
function ax(el){for(const a of AT){const v=el.getAttribute(a);if(v==null)continue;const k='en'+a.replace('-','');
 if(el.dataset[k]===undefined){if(tr(v)===v)continue;el.dataset[k]=v}
 const en=el.dataset[k],w=lang==='ar'?tr(en):en;if(v!==w)el.setAttribute(a,w)}}
function walk(root){const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>/^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),a=[];
 while(w.nextNode())a.push(w.currentNode);a.forEach(tx);
 if(root.nodeType===1){ax(root);root.querySelectorAll('[placeholder],[aria-label],[title],[alt]').forEach(ax)}}
new MutationObserver(ms=>{if(lang!=='ar')return;ms.forEach(m=>{if(m.type==='characterData')tx(m.target);else m.addedNodes.forEach(n=>{if(n.nodeType===3)tx(n);else if(n.nodeType===1)walk(n)})})}).observe(document.body,{childList:true,subtree:true,characterData:true});
function setLang(l){lang=l==='ar'?'ar':'en';WS.lang=lang;LS('wl',lang);const h=document.documentElement;h.lang=lang;h.dir=lang==='ar'?'rtl':'ltr';walk(document.body)}
WS.setLang=setLang;setLang(LS('wl')==='ar'?'ar':'en');
})();
