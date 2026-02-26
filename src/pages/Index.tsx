import { useState } from "react";
import Icon from "@/components/ui/icon";

type IconName = string;

const NAV_LINKS = [
  { href: "#products", label: "Продукция" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#delivery", label: "Доставка" },
  { href: "#contacts", label: "Контакты" },
];

const STATS = [
  { value: "500+", label: "Довольных клиентов" },
  { value: "12+", label: "Лет на рынке" },
  { value: "50+", label: "Партнёров" },
  { value: "1 000+", label: "Выполненных заказов" },
];

const ADVANTAGES = [
  { icon: "Award", title: "Высокое качество", desc: "Вся продукция соответствует ГОСТ и международным стандартам качества" },
  { icon: "ShieldCheck", title: "Гарантия на товары", desc: "Предоставляем гарантию на всю поставляемую продукцию" },
  { icon: "Zap", title: "Быстрая отгрузка", desc: "Отгружаем заказы в течение 1–2 рабочих дней" },
  { icon: "Headphones", title: "Экспертная поддержка", desc: "Консультируем по выбору материала и расчёту объёмов" },
];

const PRODUCTS = [
  {
    icon: "Layers",
    title: "Геотекстиль",
    desc: "Нетканый и тканый геотекстиль для дорожного строительства, дренажа и армирования грунтов",
    tag: "Есть в наличии",
  },
  {
    icon: "Grid3x3",
    title: "Геомембрана",
    desc: "Полимерные мембраны для гидроизоляции прудов, полигонов, тоннелей и водохранилищ",
    tag: "Есть в наличии",
  },
  {
    icon: "LayoutGrid",
    title: "Георешётка",
    desc: "Плоская и объёмная георешётка для укрепления откосов, склонов и дорожного основания",
    tag: "Есть в наличии",
  },
  {
    icon: "Globe",
    title: "Геосетка",
    desc: "Стеклянная и полиэфирная геосетка для армирования асфальтобетонных покрытий",
    tag: "Есть в наличии",
  },
  {
    icon: "Box",
    title: "Дренажные профили",
    desc: "Профилированные мембраны для устройства дренажных систем фундаментов и кровли",
    tag: "Есть в наличии",
  },
  {
    icon: "Package",
    title: "Геокомпозиты",
    desc: "Комплексные геосинтетические материалы, совмещающие функции дренажа и фильтрации",
    tag: "Есть в наличии",
  },
  {
    icon: "Anchor",
    title: "Габионы",
    desc: "Сетчатые конструкции для укрепления берегов, откосов и возведения подпорных стен",
    tag: "Есть в наличии",
  },
  {
    icon: "Shield",
    title: "Сварка Нетканых",
    desc: "Услуги по сварке и сшивке геотекстильных материалов на объекте или на складе",
    tag: "Услуга",
  },
  {
    icon: "Wifi",
    title: "Сетка против БПЛА",
    desc: "Специализированные защитные сетки для ограждения объектов от БПЛА",
    tag: "Новинка",
  },
  {
    icon: "Recycle",
    title: "Геосинтетика секонд",
    desc: "Геосинтетические материалы после использования по сниженным ценам",
    tag: "Эконом",
  },
  {
    icon: "Scissors",
    title: "Резиновая крошка",
    desc: "Резиновая крошка из переработанных шин для спортивных покрытий и дорог",
    tag: "Есть в наличии",
  },
  {
    icon: "Truck",
    title: "Сыпучие строительные материалы",
    desc: "Песок, щебень, грунт с доставкой по Нижнему Новгороду и области",
    tag: "Доставка",
  },
];

const WHY_US = [
  { icon: "CheckCircle2", title: "Гарантия качества", desc: "Работаем только с проверенными производителями" },
  { icon: "Truck", title: "Доставка по России", desc: "Доставляем в любой регион России" },
  { icon: "BadgePercent", title: "Лучшие цены", desc: "Работаем напрямую с производителями без посредников" },
  { icon: "Clock", title: "Гарантия 24/7", desc: "Поддержка клиентов в любое время" },
  { icon: "FileText", title: "Полный пакет документов", desc: "Сертификаты, паспорта качества, накладные" },
  { icon: "Star", title: "Опытная команда", desc: "Более 12 лет в геосинтетике" },
];

const REVIEWS = [
  {
    name: "Алексей М.",
    role: "Строительная компания",
    text: "Отличный поставщик! Заказывали геотекстиль большими объёмами. Всё доставили вовремя, качество на высоте.",
    rating: 5,
  },
  {
    name: "Сергей В.",
    role: "Дорожное строительство",
    text: "Сотрудничаем уже 3 года. Цены конкурентные, менеджеры всегда помогут подобрать нужный материал.",
    rating: 5,
  },
  {
    name: "Дмитрий Л.",
    role: "Частный застройщик",
    text: "Быстро оформили заказ, доставили в срок. Буду обращаться ещё.",
    rating: 5,
  },
];

const DELIVERY_FEATURES = [
  { icon: "MapPin", label: "Авто", desc: "По Нижнему Новгороду и области" },
  { icon: "Train", label: "ЖД отправка", desc: "По всей России" },
  { icon: "Ship", label: "Транспортные компании", desc: "Деловые линии, СДЭК, ПЭК" },
  { icon: "Package", label: "Самовывоз", desc: "С нашего склада" },
];

const FAQS = [
  { q: "Как оформить заказ?", a: "Позвоните нам или оставьте заявку на сайте. Менеджер свяжется с вами в течение 30 минут." },
  { q: "Есть ли у вас в наличии продукция?", a: "Да, основной ассортимент всегда есть на складе в Нижнем Новгороде. Уточняйте наличие у менеджера." },
  { q: "Предоставляете ли сертификаты качества?", a: "Обязательно. Все документы предоставляются при поставке: сертификаты, паспорта качества, накладные." },
  { q: "Работаете ли с физическими лицами?", a: "Работаем как с юридическими, так и с физическими лицами. Принимаем оплату по безналу и наличными." },
  { q: "Какой минимальный заказ?", a: "Минимального объёма нет — отгружаем от одного рулона. Чем больше объём, тем выгоднее цена." },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-[#1a2332]/95 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-6xl">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-green-500 rounded-md flex items-center justify-center">
              <Icon name="Leaf" size={20} className="text-white" />
            </div>
            <div>
              <span className="font-bold text-white text-lg leading-none block">ГК Поволжье</span>
              <span className="text-green-400 text-xs">Геосинтетика</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                {l.label}
              </a>
            ))}
            <a
              href="tel:+79991413600"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Позвонить
            </a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={26} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a2332] border-t border-gray-700 px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-gray-300 hover:text-green-400 py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="tel:+79991413600" className="bg-green-500 text-white text-center py-2 rounded-md text-sm font-medium">
              Позвонить
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="bg-[#1a2332] pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/9c8bc8d9-8e4f-43d5-9a7c-670342737c1c/bucket/ce46d21d-71ce-410e-87a2-b3e789a23c33.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full mb-4 border border-green-500/30">
              <Icon name="MapPin" size={12} />
              Нижний Новгород · Доставка по России
            </div>
            <h1 className="font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
              Поставки<br />геосинтетики по<br />всей России
            </h1>
            <p className="text-gray-300 text-base mb-6 max-w-lg">
              Геотекстиль, геомембраны, георешётки, габионы и другие материалы для строительства. Работаем с 2012 года.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contacts"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium text-sm transition-colors text-center"
              >
                Получить прайс-лист
              </a>
              <a
                href="tel:+79991413600"
                className="border border-green-500 text-green-400 hover:bg-green-500/10 px-6 py-3 rounded-md font-medium text-sm transition-colors text-center flex items-center justify-center gap-2"
              >
                <Icon name="Phone" size={15} />
                +7 (999) 141-36-00
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-8 h-8 bg-[#2196F3]/20 hover:bg-[#2196F3]/40 rounded-full flex items-center justify-center transition-colors">
                <Icon name="Send" size={14} className="text-blue-400" />
              </a>
              <a href="#" className="w-8 h-8 bg-green-500/20 hover:bg-green-500/40 rounded-full flex items-center justify-center transition-colors">
                <Icon name="MessageCircle" size={14} className="text-green-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* НАМ ДОВЕРЯЮТ */}
      <section className="py-10 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-center text-gray-400 text-sm mb-6">Нам доверяют</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-[#1a2332]">{s.value}</div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="py-16 px-4" id="advantages">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a2332] mb-10">Наши преимущества</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={a.icon} size={24} className="text-green-500" />
                </div>
                <h3 className="font-semibold text-[#1a2332] mb-2 text-sm">{a.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#contacts" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors">
              Связаться с нами
              <Icon name="ArrowRight" size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ПРОДУКЦИЯ */}
      <section className="py-16 px-4 bg-gray-50" id="products">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a2332] mb-10">Наша продукция</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                    <Icon name={p.icon} size={20} className="text-green-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[#1a2332] text-sm">{p.title}</h3>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">{p.desc}</p>
                    <span className="inline-block text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full border border-green-100">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <a href="#contacts" className="mt-4 block text-center border border-green-200 text-green-600 hover:bg-green-50 py-2 rounded-md text-xs font-medium transition-colors">
                  Узнать цену
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#contacts" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors">
              Весь каталог и цены
              <Icon name="ArrowRight" size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ПОЧЕМУ ВЫБИРАЮТ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a2332] mb-10">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((w, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={w.icon} size={20} className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a2332] text-sm mb-1">{w.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a2332] mb-10">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div>
                  <div className="font-semibold text-[#1a2332] text-sm">{r.name}</div>
                  <div className="text-gray-400 text-xs">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://yandex.ru/maps" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-600 px-6 py-3 rounded-md text-sm font-medium transition-colors">
              <Icon name="ExternalLink" size={14} />
              Все отзывы на Яндекс Картах
            </a>
          </div>
        </div>
      </section>

      {/* ДОСТАВКА */}
      <section className="py-16 px-4" id="delivery">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a2332] mb-4">Доставка по всей России</h2>
          <p className="text-center text-gray-500 text-sm mb-10 max-w-xl mx-auto">
            Организуем доставку в любую точку России. Работаем с транспортными компаниями, осуществляем собственную доставку по НН и области.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
            {DELIVERY_FEATURES.map((d, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={d.icon} size={22} className="text-green-500" />
                </div>
                <div className="font-semibold text-[#1a2332] text-sm mb-1">{d.label}</div>
                <div className="text-gray-500 text-xs">{d.desc}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1a2332] rounded-xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-base mb-1">Бесплатный расчёт доставки</h3>
              <p className="text-gray-400 text-sm">Укажите адрес — рассчитаем стоимость и сроки</p>
            </div>
            <a href="#contacts" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-sm font-medium whitespace-nowrap transition-colors">
              Рассчитать доставку
            </a>
          </div>
        </div>
      </section>

      {/* О КОМПАНИИ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-4">О компании</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                ГК Поволжье — один из ведущих поставщиков геосинтетических материалов в Приволжском федеральном округе. Мы работаем с 2012 года и за это время выполнили более 1000 заказов для строительных компаний, дорожников и частных застройщиков.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Наш склад расположен в Нижнем Новгороде. В наличии всегда широкий ассортимент геотекстиля, геомембран, георешёток, габионов и других материалов от проверенных производителей.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "500+", lbl: "довольных клиентов" },
                  { val: "10+", lbl: "лет опыта" },
                  { val: "24ч", lbl: "время отгрузки" },
                ].map((s, i) => (
                  <div key={i} className="text-center bg-white rounded-xl p-4 border border-gray-100">
                    <div className="text-2xl font-bold text-green-500">{s.val}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.lbl}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 flex-1">
                  <Icon name="Award" size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#1a2332] text-xs mb-0.5">Наша продукция</div>
                    <div className="text-gray-500 text-xs">Сертифицированные материалы от надёжных производителей</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a2332] rounded-2xl p-8 text-white">
              <h3 className="font-semibold text-lg mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={16} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Телефон</div>
                    <a href="tel:+79991413600" className="text-white text-sm font-medium hover:text-green-400 transition-colors">+7 (999) 141-36-00</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={16} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Дополнительный</div>
                    <a href="tel:+79990741177" className="text-white text-sm font-medium hover:text-green-400 transition-colors">+7 (999) 074-11-77</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={16} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Адрес</div>
                    <div className="text-white text-sm">г. Нижний Новгород</div>
                  </div>
                </div>
              </div>
              <a href="tel:+79991413600"
                className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-md text-sm font-medium transition-colors">
                Позвонить сейчас
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a2332] mb-10">Частые вопросы</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-[#1a2332] text-sm pr-4">{faq.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-gray-400 flex-shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section className="py-16 px-4 bg-[#1a2332]" id="contacts">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-2">Контакты</h2>
          <p className="text-center text-gray-400 text-sm mb-10">Готовы ответить на ваши вопросы</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={18} className="text-green-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Телефоны</div>
                  <a href="tel:+79991413600" className="text-white font-medium block hover:text-green-400 transition-colors">+7 (999) 141-36-00</a>
                  <a href="tel:+79990741177" className="text-white font-medium block hover:text-green-400 transition-colors">+7 (999) 074-11-77</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={18} className="text-green-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Адрес</div>
                  <div className="text-white font-medium">г. Нижний Новгород</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={18} className="text-green-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">График работы</div>
                  <div className="text-white font-medium">Пн–Пт: 9:00 – 18:00</div>
                  <div className="text-gray-400 text-sm">Сб: по договорённости</div>
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <a href="#" className="flex items-center gap-2 bg-[#2196F3]/20 hover:bg-[#2196F3]/30 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-md text-xs font-medium transition-colors">
                  <Icon name="Send" size={13} />
                  Telegram
                </a>
                <a href="#" className="flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 px-4 py-2 rounded-md text-xs font-medium transition-colors">
                  <Icon name="MessageCircle" size={13} />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 text-sm">Оставить заявку</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-green-400"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-green-400"
                />
                <textarea
                  placeholder="Что вас интересует?"
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-green-400 resize-none"
                />
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md text-sm font-medium transition-colors">
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111827] py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                  <Icon name="Leaf" size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-none">ГК Поволжье</div>
                  <div className="text-green-400 text-xs">Геосинтетика</div>
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">Поставки геосинтетических материалов по всей России с 2012 года</p>
            </div>
            <div>
              <div className="text-white font-semibold text-xs mb-3">Продукция</div>
              <div className="space-y-2">
                {["Геотекстиль", "Геомембрана", "Георешётка", "Геосетка", "Габионы"].map((p) => (
                  <a key={p} href="#products" className="block text-gray-500 hover:text-green-400 text-xs transition-colors">{p}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-white font-semibold text-xs mb-3">Компания</div>
              <div className="space-y-2">
                {["О компании", "Доставка", "Контакты", "Частые вопросы"].map((l) => (
                  <a key={l} href="#" className="block text-gray-500 hover:text-green-400 text-xs transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-white font-semibold text-xs mb-3">Контакты</div>
              <div className="space-y-2">
                <a href="tel:+79991413600" className="block text-gray-500 hover:text-green-400 text-xs transition-colors">+7 (999) 141-36-00</a>
                <a href="tel:+79990741177" className="block text-gray-500 hover:text-green-400 text-xs transition-colors">+7 (999) 074-11-77</a>
                <div className="text-gray-500 text-xs">г. Нижний Новгород</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-5 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-600 text-xs">© 2024 ГК Поволжье. Все права защищены.</p>
            <p className="text-gray-600 text-xs">Нижний Новгород · gkpovolzhje.ru</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;