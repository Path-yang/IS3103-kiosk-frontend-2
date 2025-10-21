import { Translation } from '../types';

export const translations: Record<string, Translation> = {
  // Welcome Screen
  welcome: {
    en: 'Welcome to',
    zh: '欢迎光临',
    ms: 'Selamat Datang ke',
    ta: 'வரவேற்கிறோம்',
  },
  restaurantName: {
    en: 'Zhangliang Malatang',
    zh: '张亮麻辣烫',
    ms: 'Zhangliang Malatang',
    ta: 'ஜாங்லியாங் மாலாதாங்',
  },
  startOrder: {
    en: 'Start Order',
    zh: '开始点餐',
    ms: 'Mula Pesanan',
    ta: 'ஆர்டரை தொடங்கவும்',
  },
  selectLanguage: {
    en: 'Select Language',
    zh: '选择语言',
    ms: 'Pilih Bahasa',
    ta: 'மொழியைத் தேர்ந்தெடுக்கவும்',
  },
  estimatedTime: {
    en: 'Estimated time: 10-15 minutes',
    zh: '预计时间：10-15 分钟',
    ms: 'Anggaran masa: 10-15 minit',
    ta: 'மதிப்பிடப்பட்ட நேரம்: 10-15 நிமிடங்கள்',
  },

  // Member Login Screen
  memberOrGuest: {
    en: 'Member or Guest?',
    zh: '会员或游客？',
    ms: 'Ahli atau Tetamu?',
    ta: 'உறுப்பினரா அல்லது விருந்தினரா?',
  },
  loginAsMember: {
    en: 'Login as Member',
    zh: '会员登录',
    ms: 'Log Masuk sebagai Ahli',
    ta: 'உறுப்பினராக உள்நுழைய',
  },
  continueAsGuest: {
    en: 'Continue as Guest',
    zh: '以游客身份继续',
    ms: 'Teruskan sebagai Tetamu',
    ta: 'விருந்தினராக தொடரவும்',
  },
  memberBenefits: {
    en: 'Members earn points and get exclusive discounts!',
    zh: '会员可赚取积分并享受独家折扣！',
    ms: 'Ahli mendapat mata dan diskaun eksklusif!',
    ta: 'உறுப்பினர்கள் புள்ளிகளை சம்பாதித்து சிறப்பு தள்ளுபடிகளைப் பெறுகிறார்கள்!',
  },
  enterPhoneNumber: {
    en: 'Enter Your Phone Number',
    zh: '输入您的电话号码',
    ms: 'Masukkan Nombor Telefon Anda',
    ta: 'உங்கள் தொலைபேசி எண்ணை உள்ளிடுங்கள்',
  },
  phoneNumber: {
    en: 'Phone Number',
    zh: '电话号码',
    ms: 'Nombor Telefon',
    ta: 'தொலைபேசி எண்',
  },
  login: {
    en: 'Login',
    zh: '登录',
    ms: 'Log Masuk',
    ta: 'உள்நுழை',
  },
  memberNotFound: {
    en: 'Member not found. Please try again or continue as guest.',
    zh: '未找到会员。请重试或以游客身份继续。',
    ms: 'Ahli tidak dijumpai. Sila cuba lagi atau teruskan sebagai tetamu.',
    ta: 'உறுப்பினர் கிடைக்கவில்லை. தயவு செய்து மீண்டும் முயலுங்கள் அல்லது விருந்தினராக தொடரவும்.',
  },
  welcomeBack: {
    en: 'Welcome back',
    zh: '欢迎回来',
    ms: 'Selamat kembali',
    ta: 'மீண்டும் வந்து சேர்வதை வரவேற்கிறோம்',
  },
  yourPoints: {
    en: 'Your Points',
    zh: '您的积分',
    ms: 'Mata Anda',
    ta: 'உங்கள் புள்ளிகள்',
  },
  availablePoints: {
    en: 'Available Points',
    zh: '可用积分',
    ms: 'Mata Tersedia',
    ta: 'கிடைக்கும் புள்ளிகள்',
  },
  pointsValue: {
    en: 'points',
    zh: '积分',
    ms: 'mata',
    ta: 'புள்ளிகள்',
  },
  usePoints: {
    en: 'Use Points',
    zh: '使用积分',
    ms: 'Guna Mata',
    ta: 'புள்ளிகளைப் பயன்படுத்தவும்',
  },
  pointsDiscount: {
    en: 'Points Discount',
    zh: '积分折扣',
    ms: 'Diskaun Mata',
    ta: 'புள்ளி தள்ளுபடி',
  },
  pointsToUse: {
    en: 'Points to use',
    zh: '使用积分',
    ms: 'Mata untuk digunakan',
    ta: 'பயன்படுத்த வேண்டிய புள்ளிகள்',
  },
  applyPoints: {
    en: 'Apply Points',
    zh: '应用积分',
    ms: 'Guna Mata',
    ta: 'புள்ளிகளைச் செயல்படுத்தவும்',
  },
  pointsApplied: {
    en: 'Points Applied',
    zh: '积分已应用',
    ms: 'Mata Digunakan',
    ta: 'புள்ளிகள் பயன்படுத்தப்பட்டன',
  },
  earnPoints: {
    en: 'You will earn',
    zh: '您将获得',
    ms: 'Anda akan dapat',
    ta: 'நீங்கள் பெறுவீர்கள்',
  },
  pointsFromOrder: {
    en: 'points from this order',
    zh: '积分从此订单',
    ms: 'mata daripada pesanan ini',
    ta: 'இந்த ஆர்டரில் இருந்து புள்ளிகள்',
  },

  // Weighing Screen
  weighYourFood: {
    en: 'Weigh Your Food',
    zh: '称重您的食物',
    ms: 'Timbang Makanan Anda',
    ta: 'உங்களது உணவை எடைகொள்ளுங்கள்',
  },
  placeOnScale: {
    en: 'Please place your bowl on the scale',
    zh: '请将您的碗放在秤上',
    ms: 'Sila letakkan mangkuk anda di atas penimbang',
    ta: 'தயவுசெய்து உங்கள் கிண்ணத்தை தராசில் வைத்து கொள்ளுங்கள்',
  },
  weight: {
    en: 'Weight',
    zh: '重量',
    ms: 'Berat',
    ta: 'எடை',
  },
  weighing: {
    en: 'Weighing...',
    zh: '称重中...',
    ms: 'Menimbang...',
    ta: 'எடை கணக்கிடப்படுகிறது...',
  },
  estimatedPrice: {
    en: 'Estimated Price',
    zh: '预估价格',
    ms: 'Anggaran Harga',
    ta: 'மதிப்பிடப்பட்ட விலை',
  },
  perKg: {
    en: 'per kg',
    zh: '每公斤',
    ms: 'setiap kg',
    ta: 'ஒவ்வொரு கிலோவுக்கும்',
  },
  weightGuideline: {
    en: 'Weight Guidelines',
    zh: '重量指南',
    ms: 'Panduan Berat',
    ta: 'எடை வழிகாட்டுதல்',
  },
  lightMeal: {
    en: 'Light Meal',
    zh: '轻食',
    ms: 'Makanan Ringan',
    ta: 'லேசான உணவு',
  },
  regularMeal: {
    en: 'Regular Meal',
    zh: '标准餐',
    ms: 'Makanan Biasa',
    ta: 'இயல்பான உணவு',
  },
  largeMeal: {
    en: 'Large Meal',
    zh: '大份餐',
    ms: 'Makanan Besar',
    ta: 'பெரிய உணவு',
  },
  reweigh: {
    en: 'Reweigh',
    zh: '重新称重',
    ms: 'Timbang Semula',
    ta: 'மீண்டும் எடைப்போடவும்',
  },
  confirmWeight: {
    en: 'Confirm Weight',
    zh: '确认重量',
    ms: 'Sahkan Berat',
    ta: 'எடையை உறுதிப்படுத்தவும்',
  },
  noWeightDetected: {
    en: 'No weight detected. Please ensure your bowl is on the scale.',
    zh: '未检测到重量。请确保您的碗在秤上。',
    ms: 'Tiada berat dikesan. Sila pastikan mangkuk anda di atas penimbang.',
    ta: 'எடை கண்டறியப்படவில்லை. தயவுசெய்து உங்கள் கிண்ணம் தராசில் இருப்பதை உறுதிப்படுத்துங்கள்.',
  },

  // Portion Size Screen
  selectPortion: {
    en: 'Select Your Portion Size',
    zh: '选择份量',
    ms: 'Pilih Saiz Bahagian',
    ta: 'உங்கள் பகுதி அளவைத் தேர்ந்தெடுக்கவும்',
  },
  continue: {
    en: 'Continue',
    zh: '继续',
    ms: 'Teruskan',
    ta: 'தொடரவும்',
  },
  back: {
    en: 'Back',
    zh: '返回',
    ms: 'Kembali',
    ta: 'திரும்ப',
  },

  // Soup Base Screen
  selectSoup: {
    en: 'Choose Your Soup Base',
    zh: '选择汤底',
    ms: 'Pilih Asas Sup',
    ta: 'உங்கள் சூப் அடிப்படையைத் தேர்ந்தெடுக்கவும்',
  },
  spiceLevel: {
    en: 'Spice Level',
    zh: '辣度',
    ms: 'Tahap Pedas',
    ta: 'காரத்தன்மை அளவு',
  },

  // Ingredient Selection Screen
  selectIngredients: {
    en: 'Select Your Ingredients',
    zh: '选择食材',
    ms: 'Pilih Bahan',
    ta: 'உங்கள் பொருட்களைத் தேர்ந்தெடுக்கவும்',
  },
  vegetables: {
    en: 'Vegetables',
    zh: '蔬菜',
    ms: 'Sayur-sayuran',
    ta: 'காய்கறிகள்',
  },
  meat: {
    en: 'Meat',
    zh: '肉类',
    ms: 'Daging',
    ta: 'இறைச்சி',
  },
  seafood: {
    en: 'Seafood',
    zh: '海鲜',
    ms: 'Makanan Laut',
    ta: 'கடல் உணவு',
  },
  tofuNoodles: {
    en: 'Tofu & Noodles',
    zh: '豆腐面条',
    ms: 'Tauhu & Mi',
    ta: 'தோஃபு மற்றும் நூடுல்ஸ்',
  },
  customerFavorite: {
    en: 'Customer Favorite',
    zh: '人气推荐',
    ms: 'Kegemaran Pelanggan',
    ta: 'வாடிக்கையாளர் விருப்பம்',
  },
  reviewOrder: {
    en: 'Review Order',
    zh: '查看订单',
    ms: 'Semak Pesanan',
    ta: 'ஆர்டரைப் பார்க்க',
  },
  needHelp: {
    en: 'Need Help?',
    zh: '需要帮助？',
    ms: 'Perlukan Bantuan?',
    ta: 'உதவி தேவையா?',
  },
  weightProgress: {
    en: 'Weight Progress',
    zh: '重量进度',
    ms: 'Kemajuan Berat',
    ta: 'எடை முன்னேற்றம்',
  },

  // Customization Screen
  customizeOrder: {
    en: 'Customize Your Order',
    zh: '定制您的订单',
    ms: 'Sesuaikan Pesanan',
    ta: 'உங்கள் ஆர்டரை விருப்பப்படுத்தவும்',
  },
  adjustSpice: {
    en: 'Adjust Spice Level',
    zh: '调整辣度',
    ms: 'Laraskan Tahap Pedas',
    ta: 'காரத்தன்மையை சரிசெய்க',
  },
  mild: {
    en: 'Mild',
    zh: '微辣',
    ms: 'Lembut',
    ta: 'லேசானது',
  },
  medium: {
    en: 'Medium',
    zh: '中辣',
    ms: 'Sederhana',
    ta: 'நடுத்தரம்',
  },
  spicy: {
    en: 'Spicy',
    zh: '辣',
    ms: 'Pedas',
    ta: 'காரம்',
  },
  extraSpicy: {
    en: 'Extra Spicy',
    zh: '特辣',
    ms: 'Sangat Pedas',
    ta: 'கூடுதல் காரம்',
  },
  extreme: {
    en: 'Extreme',
    zh: '变态辣',
    ms: 'Melampau',
    ta: 'அதிகப்படியான காரம்',
  },
  extraToppings: {
    en: 'Extra Toppings',
    zh: '额外配料',
    ms: 'Topping Tambahan',
    ta: 'கூடுதல் சேர்த்தல்கள்',
  },
  addDrink: {
    en: 'Add a Drink',
    zh: '添加饮料',
    ms: 'Tambah Minuman',
    ta: 'ஒரு பானத்தைச் சேர்க்கவும்',
  },
  addSide: {
    en: 'Add a Side',
    zh: '添加小吃',
    ms: 'Tambah Makanan Sampingan',
    ta: 'ஒரு பக்க உணவைச் சேர்க்கவும்',
  },
  proceedToCheckout: {
    en: 'Proceed to Checkout',
    zh: '结账',
    ms: 'Teruskan ke Pembayaran',
    ta: 'செக் அவுட் செய்யத் தொடரவும்',
  },
  customersAlsoAdded: {
    en: 'Customers also added...',
    zh: '顾客还添加了...',
    ms: 'Pelanggan juga menambah...',
    ta: 'வாடிக்கையாளர்கள் கூட சேர்த்தவை...',
  },

  // Review Screen
  orderSummary: {
    en: 'Order Summary',
    zh: '订单摘要',
    ms: 'Ringkasan Pesanan',
    ta: 'ஆர்டர் சுருக்கம்',
  },
  portionSize: {
    en: 'Portion Size',
    zh: '份量',
    ms: 'Saiz Bahagian',
    ta: 'பகுதி அளவு',
  },
  soupBase: {
    en: 'Soup Base',
    zh: '汤底',
    ms: 'Asas Sup',
    ta: 'சூப் அடிப்படை',
  },
  ingredients: {
    en: 'Ingredients',
    zh: '食材',
    ms: 'Bahan',
    ta: 'பொருட்கள்',
  },
  addons: {
    en: 'Add-ons',
    zh: '附加项',
    ms: 'Tambahan',
    ta: 'கூடுதல் பொருட்கள்',
  },
  drinks: {
    en: 'Drinks',
    zh: '饮料',
    ms: 'Minuman',
    ta: 'பானங்கள்',
  },
  sides: {
    en: 'Sides',
    zh: '小吃',
    ms: 'Makanan Sampingan',
    ta: 'பக்க உணவுகள்',
  },
  subtotal: {
    en: 'Subtotal',
    zh: '小计',
    ms: 'Jumlah Kecil',
    ta: 'கூட்டுத்தொகை',
  },
  tax: {
    en: 'Tax (9%)',
    zh: '税费 (9%)',
    ms: 'Cukai (9%)',
    ta: 'வரி (9%)',
  },
  serviceCharge: {
    en: 'Service Charge (10%)',
    zh: '服务费 (10%)',
    ms: 'Caj Perkhidmatan (10%)',
    ta: 'சேவை கட்டணம் (10%)',
  },
  total: {
    en: 'Total',
    zh: '总计',
    ms: 'Jumlah',
    ta: 'மொத்தம்',
  },
  edit: {
    en: 'Edit',
    zh: '编辑',
    ms: 'Edit',
    ta: 'திருத்து',
  },
  confirmAndPay: {
    en: 'Confirm & Pay',
    zh: '确认并付款',
    ms: 'Sahkan & Bayar',
    ta: 'உறுதிப்படுத்தி கட்டணம் செலுத்தவும்',
  },
  estimatedPrepTime: {
    en: 'Estimated preparation time: 8-12 minutes',
    zh: '预计准备时间：8-12 分钟',
    ms: 'Anggaran masa penyediaan: 8-12 minit',
    ta: 'மதிப்பிடப்பட்ட தயாரிப்பு நேரம்: 8-12 நிமிடங்கள்',
  },

  // Payment Screen
  selectPayment: {
    en: 'Select Payment Method',
    zh: '选择支付方式',
    ms: 'Pilih Kaedah Pembayaran',
    ta: 'கட்டண முறையைத் தேர்ந்தெடுக்கவும்',
  },
  creditCard: {
    en: 'Credit/Debit Card',
    zh: '信用卡/借记卡',
    ms: 'Kad Kredit/Debit',
    ta: 'கிரெடிட்/டெபிட் கார்ட்',
  },
  mobilePayment: {
    en: 'Mobile Payment',
    zh: '移动支付',
    ms: 'Pembayaran Mudah Alih',
    ta: 'மொபைல் கட்டணம்',
  },
  cash: {
    en: 'Cash (Call Staff)',
    zh: '现金（呼叫服务员）',
    ms: 'Tunai (Panggil Kakitangan)',
    ta: 'பணம் (பணியாளரை அழைக்கவும்)',
  },
  processing: {
    en: 'Processing Payment...',
    zh: '处理付款中...',
    ms: 'Memproses Pembayaran...',
    ta: 'கட்டணம் செயலாக்கப்படுகிறது...',
  },
  securePayment: {
    en: 'Your payment is secure and encrypted',
    zh: '您的支付安全且加密',
    ms: 'Pembayaran anda selamat dan disulitkan',
    ta: 'உங்கள் கட்டணம் பாதுகாப்பாகவும் குறியாக்கப்பட்டதாகவும் உள்ளது',
  },

  // Confirmation Screen
  orderConfirmed: {
    en: 'Order Confirmed!',
    zh: '订单已确认！',
    ms: 'Pesanan Disahkan!',
    ta: 'ஆர்டர் உறுதி செய்யப்பட்டது!',
  },
  orderNumber: {
    en: 'Order Number',
    zh: '订单号',
    ms: 'Nombor Pesanan',
    ta: 'ஆர்டர் எண்',
  },
  preparingOrder: {
    en: 'Your order is being prepared!',
    zh: '您的订单正在准备中！',
    ms: 'Pesanan anda sedang disediakan!',
    ta: 'உங்கள் ஆர்டர் தயாராகிறது!',
  },
  estimatedWait: {
    en: 'Estimated wait time',
    zh: '预计等待时间',
    ms: 'Anggaran masa menunggu',
    ta: 'மதிப்பிடப்பட்ட காத்திருப்பு நேரம்',
  },
  minutes: {
    en: 'minutes',
    zh: '分钟',
    ms: 'minit',
    ta: 'நிமிடங்கள்',
  },
  startNewOrder: {
    en: 'Start New Order',
    zh: '开始新订单',
    ms: 'Mula Pesanan Baru',
    ta: 'புதிய ஆர்டரை தொடங்குங்கள்',
  },
  thankYou: {
    en: 'Thank you for your order!',
    zh: '感谢您的订单！',
    ms: 'Terima kasih atas pesanan anda!',
    ta: 'உங்கள் ஆர்டருக்கு நன்றி!',
  },

  // Cart
  yourCart: {
    en: 'Your Cart',
    zh: '购物车',
    ms: 'Troli Anda',
    ta: 'உங்கள் வண்டி',
  },
  emptyCart: {
    en: 'Your cart is empty',
    zh: '购物车是空的',
    ms: 'Troli anda kosong',
    ta: 'உங்கள் வண்டி காலியாக உள்ளது',
  },
  clearAll: {
    en: 'Clear All',
    zh: '清空',
    ms: 'Kosongkan Semua',
    ta: 'அனைத்தையும் துடைக்கவும்',
  },
  items: {
    en: 'items',
    zh: '项',
    ms: 'item',
    ta: 'பொருட்கள்',
  },

  // Common
  step: {
    en: 'Step',
    zh: '步骤',
    ms: 'Langkah',
    ta: 'படிநிலை',
  },
  of: {
    en: 'of',
    zh: '共',
    ms: 'daripada',
    ta: 'இல்',
  },
  cancel: {
    en: 'Cancel',
    zh: '取消',
    ms: 'Batal',
    ta: 'ரத்து செய்யவும்',
  },
  confirm: {
    en: 'Confirm',
    zh: '确认',
    ms: 'Sahkan',
    ta: 'உறுதிப்படுத்தவும்',
  },
  callStaff: {
    en: 'Call Staff',
    zh: '呼叫服务员',
    ms: 'Panggil Kakitangan',
    ta: 'பணியாளரை அழைக்கவும்',
  },
  howToOrder: {
    en: 'How to Order',
    zh: '如何订购',
    ms: 'Cara Memesan',
    ta: 'எப்படி ஆர்டர் செய்வது',
  },
};
