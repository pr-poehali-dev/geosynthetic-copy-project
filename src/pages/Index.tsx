import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">S</span>
            </div>
            <span className="font-heading font-bold text-2xl text-accent">STABXGEO</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#products" className="text-secondary hover:text-primary transition-colors">Продукция</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">Контакты</a>
            <Button className="bg-primary hover:bg-primary/90">Связаться</Button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={28} className="text-accent" />
          </button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-accent mb-6 leading-tight">
              Геосинтетические<br />материалы
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto mb-10">
              Надежные решения для строительства и инфраструктуры. Качество, проверенное временем.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Каталог продукции
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" id="products">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-heading font-bold text-4xl text-center text-accent mb-16 animate-slide-up">
            Наша продукция
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Layers", title: "Геотекстиль", desc: "Армирование и укрепление грунтов" },
              { icon: "Shield", title: "Геомембраны", desc: "Гидроизоляция и защита" },
              { icon: "Grid3x3", title: "Георешетки", desc: "Стабилизация и укрепление" },
            ].map((item, i) => (
              <Card key={i} className="p-8 hover:shadow-xl transition-shadow duration-300 border-0 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={item.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-accent mb-3">{item.title}</h3>
                <p className="text-secondary leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="about">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading font-bold text-4xl text-accent mb-6">
                Почему выбирают нас
              </h2>
              <p className="text-secondary text-lg mb-8 leading-relaxed">
                Мы предлагаем высококачественные геосинтетические материалы для строительства, укрепления дорог и гидроизоляции. Наши решения соответствуют мировым стандартам качества.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "CheckCircle2", text: "Сертифицированная продукция" },
                  { icon: "Truck", text: "Оперативная доставка" },
                  { icon: "Users", text: "Экспертная поддержка" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Icon name={item.icon} size={24} className="text-primary flex-shrink-0" />
                    <span className="text-accent text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl animate-fade-in"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent text-white" id="contact">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-heading font-bold text-4xl mb-6 animate-fade-in">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-white/80 mb-10 animate-fade-in">
            Свяжитесь с нами для консультации и расчета стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <div className="flex items-center gap-3">
              <Icon name="Phone" size={24} />
              <span className="text-lg">+7 (xxx) xxx-xx-xx</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Mail" size={24} />
              <span className="text-lg">info@stabxgeo.ru</span>
            </div>
          </div>
          <Button size="lg" className="mt-10 bg-white text-accent hover:bg-white/90">
            Отправить заявку
          </Button>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">S</span>
              </div>
              <span className="font-heading font-bold text-xl text-accent">STABXGEO</span>
            </div>
            <p className="text-secondary text-sm">© 2024 STABXGEO. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
