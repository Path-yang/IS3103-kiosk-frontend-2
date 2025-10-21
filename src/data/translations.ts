import { Translation } from '../types';

export const translations: Record<string, Translation> = {
  // Welcome Screen
  welcome: {
    en: 'Welcome to',
    zh: '欢迎光临',
    ms: 'Selamat Datang ke',
  },
  restaurantName: {
    en: 'Zhangliang Malatang',
    zh: '张亮麻辣烫',
    ms: 'Zhangliang Malatang',
  },
  startOrder: {
    en: 'Start Order',
    zh: '开始点餐',
    ms: 'Mula Pesanan',
  },
  selectLanguage: {
    en: 'Select Language',
    zh: '选择语言',
    ms: 'Pilih Bahasa',
  },
  estimatedTime: {
    en: 'Estimated time: 10-15 minutes',
    zh: '预计时间：10-15 分钟',
    ms: 'Anggaran masa: 10-15 minit',
  },

  // Member Login Screen
  memberOrGuest: {
    en: 'Member or Guest?',
    zh: '会员或游客？',
    ms: 'Ahli atau Tetamu?',
  },
  loginAsMember: {
    en: 'Login as Member',
    zh: '会员登录',
    ms: 'Log Masuk sebagai Ahli',
  },
  continueAsGuest: {
    en: 'Continue as Guest',
    zh: '以游客身份继续',
    ms: 'Teruskan sebagai Tetamu',
  },
  memberBenefits: {
    en: 'Members earn points and get exclusive discounts!',
    zh: '会员可赚取积分并享受独家折扣！',
    ms: 'Ahli mendapat mata dan diskaun eksklusif!',
  },
  enterPhoneNumber: {
    en: 'Enter Your Phone Number',
    zh: '输入您的电话号码',
    ms: 'Masukkan Nombor Telefon Anda',
  },
  phoneNumber: {
    en: 'Phone Number',
    zh: '电话号码',
    ms: 'Nombor Telefon',
  },
  login: {
    en: 'Login',
    zh: '登录',
    ms: 'Log Masuk',
  },
  memberNotFound: {
    en: 'Member not found. Please try again or continue as guest.',
    zh: '未找到会员。请重试或以游客身份继续。',
    ms: 'Ahli tidak dijumpai. Sila cuba lagi atau teruskan sebagai tetamu.',
  },
  welcomeBack: {
    en: 'Welcome back',
    zh: '欢迎回来',
    ms: 'Selamat kembali',
  },
  yourPoints: {
    en: 'Your Points',
    zh: '您的积分',
    ms: 'Mata Anda',
  },
  availablePoints: {
    en: 'Available Points',
    zh: '可用积分',
    ms: 'Mata Tersedia',
  },
  pointsValue: {
    en: 'points',
    zh: '积分',
    ms: 'mata',
  },
  usePoints: {
    en: 'Use Points',
    zh: '使用积分',
    ms: 'Guna Mata',
  },
  pointsDiscount: {
    en: 'Points Discount',
    zh: '积分折扣',
    ms: 'Diskaun Mata',
  },
  pointsToUse: {
    en: 'Points to use',
    zh: '使用积分',
    ms: 'Mata untuk digunakan',
  },
  applyPoints: {
    en: 'Apply Points',
    zh: '应用积分',
    ms: 'Guna Mata',
  },
  pointsApplied: {
    en: 'Points Applied',
    zh: '积分已应用',
    ms: 'Mata Digunakan',
  },
  earnPoints: {
    en: 'You will earn',
    zh: '您将获得',
    ms: 'Anda akan dapat',
  },
  pointsFromOrder: {
    en: 'points from this order',
    zh: '积分从此订单',
    ms: 'mata daripada pesanan ini',
  },

  // Weighing Screen
  weighYourFood: {
    en: 'Weigh Your Food',
    zh: '称重您的食物',
    ms: 'Timbang Makanan Anda',
  },
  placeOnScale: {
    en: 'Please place your bowl on the scale',
    zh: '请将您的碗放在秤上',
    ms: 'Sila letakkan mangkuk anda di atas penimbang',
  },
  weight: {
    en: 'Weight',
    zh: '重量',
    ms: 'Berat',
  },
  weighing: {
    en: 'Weighing...',
    zh: '称重中...',
    ms: 'Menimbang...',
  },
  estimatedPrice: {
    en: 'Estimated Price',
    zh: '预估价格',
    ms: 'Anggaran Harga',
  },
  perKg: {
    en: 'per kg',
    zh: '每公斤',
    ms: 'setiap kg',
  },
  weightGuideline: {
    en: 'Weight Guidelines',
    zh: '重量指南',
    ms: 'Panduan Berat',
  },
  lightMeal: {
    en: 'Light Meal',
    zh: '轻食',
    ms: 'Makanan Ringan',
  },
  regularMeal: {
    en: 'Regular Meal',
    zh: '标准餐',
    ms: 'Makanan Biasa',
  },
  largeMeal: {
    en: 'Large Meal',
    zh: '大份餐',
    ms: 'Makanan Besar',
  },
  reweigh: {
    en: 'Reweigh',
    zh: '重新称重',
    ms: 'Timbang Semula',
  },
  confirmWeight: {
    en: 'Confirm Weight',
    zh: '确认重量',
    ms: 'Sahkan Berat',
  },
  noWeightDetected: {
    en: 'No weight detected. Please ensure your bowl is on the scale.',
    zh: '未检测到重量。请确保您的碗在秤上。',
    ms: 'Tiada berat dikesan. Sila pastikan mangkuk anda di atas penimbang.',
  },

  // Portion Size Screen
  selectPortion: {
    en: 'Select Your Portion Size',
    zh: '选择份量',
    ms: 'Pilih Saiz Bahagian',
  },
  continue: {
    en: 'Continue',
    zh: '继续',
    ms: 'Teruskan',
  },
  back: {
    en: 'Back',
    zh: '返回',
    ms: 'Kembali',
  },

  // Soup Base Screen
  selectSoup: {
    en: 'Choose Your Soup Base',
    zh: '选择汤底',
    ms: 'Pilih Asas Sup',
  },
  spiceLevel: {
    en: 'Spice Level',
    zh: '辣度',
    ms: 'Tahap Pedas',
  },

  // Ingredient Selection Screen
  selectIngredients: {
    en: 'Select Your Ingredients',
    zh: '选择食材',
    ms: 'Pilih Bahan',
  },
  vegetables: {
    en: 'Vegetables',
    zh: '蔬菜',
    ms: 'Sayur-sayuran',
  },
  meat: {
    en: 'Meat',
    zh: '肉类',
    ms: 'Daging',
  },
  seafood: {
    en: 'Seafood',
    zh: '海鲜',
    ms: 'Makanan Laut',
  },
  tofuNoodles: {
    en: 'Tofu & Noodles',
    zh: '豆腐面条',
    ms: 'Tauhu & Mi',
  },
  customerFavorite: {
    en: 'Customer Favorite',
    zh: '人气推荐',
    ms: 'Kegemaran Pelanggan',
  },
  reviewOrder: {
    en: 'Review Order',
    zh: '查看订单',
    ms: 'Semak Pesanan',
  },
  needHelp: {
    en: 'Need Help?',
    zh: '需要帮助？',
    ms: 'Perlukan Bantuan?',
  },
  weightProgress: {
    en: 'Weight Progress',
    zh: '重量进度',
    ms: 'Kemajuan Berat',
  },

  // Customization Screen
  customizeOrder: {
    en: 'Customize Your Order',
    zh: '定制您的订单',
    ms: 'Sesuaikan Pesanan',
  },
  adjustSpice: {
    en: 'Adjust Spice Level',
    zh: '调整辣度',
    ms: 'Laraskan Tahap Pedas',
  },
  mild: {
    en: 'Mild',
    zh: '微辣',
    ms: 'Lembut',
  },
  medium: {
    en: 'Medium',
    zh: '中辣',
    ms: 'Sederhana',
  },
  spicy: {
    en: 'Spicy',
    zh: '辣',
    ms: 'Pedas',
  },
  extraSpicy: {
    en: 'Extra Spicy',
    zh: '特辣',
    ms: 'Sangat Pedas',
  },
  extreme: {
    en: 'Extreme',
    zh: '变态辣',
    ms: 'Melampau',
  },
  extraToppings: {
    en: 'Extra Toppings',
    zh: '额外配料',
    ms: 'Topping Tambahan',
  },
  addDrink: {
    en: 'Add a Drink',
    zh: '添加饮料',
    ms: 'Tambah Minuman',
  },
  addSide: {
    en: 'Add a Side',
    zh: '添加小吃',
    ms: 'Tambah Makanan Sampingan',
  },
  proceedToCheckout: {
    en: 'Proceed to Checkout',
    zh: '结账',
    ms: 'Teruskan ke Pembayaran',
  },
  customersAlsoAdded: {
    en: 'Customers also added...',
    zh: '顾客还添加了...',
    ms: 'Pelanggan juga menambah...',
  },

  // Review Screen
  orderSummary: {
    en: 'Order Summary',
    zh: '订单摘要',
    ms: 'Ringkasan Pesanan',
  },
  portionSize: {
    en: 'Portion Size',
    zh: '份量',
    ms: 'Saiz Bahagian',
  },
  soupBase: {
    en: 'Soup Base',
    zh: '汤底',
    ms: 'Asas Sup',
  },
  ingredients: {
    en: 'Ingredients',
    zh: '食材',
    ms: 'Bahan',
  },
  addons: {
    en: 'Add-ons',
    zh: '附加项',
    ms: 'Tambahan',
  },
  drinks: {
    en: 'Drinks',
    zh: '饮料',
    ms: 'Minuman',
  },
  sides: {
    en: 'Sides',
    zh: '小吃',
    ms: 'Makanan Sampingan',
  },
  subtotal: {
    en: 'Subtotal',
    zh: '小计',
    ms: 'Jumlah Kecil',
  },
  tax: {
    en: 'Tax (9%)',
    zh: '税费 (9%)',
    ms: 'Cukai (9%)',
  },
  serviceCharge: {
    en: 'Service Charge (10%)',
    zh: '服务费 (10%)',
    ms: 'Caj Perkhidmatan (10%)',
  },
  total: {
    en: 'Total',
    zh: '总计',
    ms: 'Jumlah',
  },
  edit: {
    en: 'Edit',
    zh: '编辑',
    ms: 'Edit',
  },
  confirmAndPay: {
    en: 'Confirm & Pay',
    zh: '确认并付款',
    ms: 'Sahkan & Bayar',
  },
  estimatedPrepTime: {
    en: 'Estimated preparation time: 8-12 minutes',
    zh: '预计准备时间：8-12 分钟',
    ms: 'Anggaran masa penyediaan: 8-12 minit',
  },

  // Payment Screen
  selectPayment: {
    en: 'Select Payment Method',
    zh: '选择支付方式',
    ms: 'Pilih Kaedah Pembayaran',
  },
  creditCard: {
    en: 'Credit/Debit Card',
    zh: '信用卡/借记卡',
    ms: 'Kad Kredit/Debit',
  },
  mobilePayment: {
    en: 'Mobile Payment',
    zh: '移动支付',
    ms: 'Pembayaran Mudah Alih',
  },
  cash: {
    en: 'Cash (Call Staff)',
    zh: '现金（呼叫服务员）',
    ms: 'Tunai (Panggil Kakitangan)',
  },
  processing: {
    en: 'Processing Payment...',
    zh: '处理付款中...',
    ms: 'Memproses Pembayaran...',
  },
  securePayment: {
    en: 'Your payment is secure and encrypted',
    zh: '您的支付安全且加密',
    ms: 'Pembayaran anda selamat dan disulitkan',
  },

  // Confirmation Screen
  orderConfirmed: {
    en: 'Order Confirmed!',
    zh: '订单已确认！',
    ms: 'Pesanan Disahkan!',
  },
  orderNumber: {
    en: 'Order Number',
    zh: '订单号',
    ms: 'Nombor Pesanan',
  },
  preparingOrder: {
    en: 'Your order is being prepared!',
    zh: '您的订单正在准备中！',
    ms: 'Pesanan anda sedang disediakan!',
  },
  estimatedWait: {
    en: 'Estimated wait time',
    zh: '预计等待时间',
    ms: 'Anggaran masa menunggu',
  },
  minutes: {
    en: 'minutes',
    zh: '分钟',
    ms: 'minit',
  },
  startNewOrder: {
    en: 'Start New Order',
    zh: '开始新订单',
    ms: 'Mula Pesanan Baru',
  },
  thankYou: {
    en: 'Thank you for your order!',
    zh: '感谢您的订单！',
    ms: 'Terima kasih atas pesanan anda!',
  },

  // Cart
  yourCart: {
    en: 'Your Cart',
    zh: '购物车',
    ms: 'Troli Anda',
  },
  emptyCart: {
    en: 'Your cart is empty',
    zh: '购物车是空的',
    ms: 'Troli anda kosong',
  },
  clearAll: {
    en: 'Clear All',
    zh: '清空',
    ms: 'Kosongkan Semua',
  },
  items: {
    en: 'items',
    zh: '项',
    ms: 'item',
  },

  // Common
  step: {
    en: 'Step',
    zh: '步骤',
    ms: 'Langkah',
  },
  of: {
    en: 'of',
    zh: '共',
    ms: 'daripada',
  },
  cancel: {
    en: 'Cancel',
    zh: '取消',
    ms: 'Batal',
  },
  confirm: {
    en: 'Confirm',
    zh: '确认',
    ms: 'Sahkan',
  },
  callStaff: {
    en: 'Call Staff',
    zh: '呼叫服务员',
    ms: 'Panggil Kakitangan',
  },
  howToOrder: {
    en: 'How to Order',
    zh: '如何订购',
    ms: 'Cara Memesan',
  },
};
