import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const apartments = [
    {
      name: "Базовый",
      speed: "30 Мбит/с",
      price: "450",
      features: ["Безлимитный интернет", "Стабильное соединение", "Техподдержка 24/7"]
    },
    {
      name: "Стандарт",
      speed: "50 Мбит/с", 
      price: "650",
      features: ["Безлимитный интернет", "Высокая скорость", "Техподдержка 24/7", "Wi-Fi роутер"]
    },
    {
      name: "Премиум",
      speed: "100 Мбит/с",
      price: "950",
      features: ["Безлимитный интернет", "Максимальная скорость", "Техподдержка 24/7", "Wi-Fi роутер", "IP-TV"]
    }
  ];

  const houses = [
    {
      name: "Загородный",
      speed: "25 Мбит/с",
      price: "850",
      features: ["Безлимитный интернет", "Оптоволокно до дома", "Техподдержка 24/7"]
    },
    {
      name: "Коттедж",
      speed: "75 Мбит/с",
      price: "1250", 
      features: ["Безлимитный интернет", "Высокая скорость", "Техподдержка 24/7", "Wi-Fi роутер", "Статический IP"]
    },
    {
      name: "Усадьба",
      speed: "150 Мбит/с",
      price: "1850",
      features: ["Безлимитный интернет", "Максимальная скорость", "Техподдержка 24/7", "Wi-Fi роутер", "IP-TV", "Видеонаблюдение"]
    }
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="https://orn.ru/style/img/resurs-logo.svg" alt="Ресурс-Связь" className="h-10" />
            <h1 className="text-2xl font-bold text-primary">Ресурс-Связь</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
            <a href="#tariffs" className="text-gray-600 hover:text-primary transition-colors">Тарифы</a>
            <a href="#payment" className="text-gray-600 hover:text-primary transition-colors">Оплата</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
            <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            <Button onClick={() => setShowLogin(!showLogin)} variant={isLoggedIn ? "secondary" : "default"}>
              {isLoggedIn ? "Личный кабинет" : "Войти"}
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Интернет нового поколения
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Провайдер нового тысячелетия. Мы постоянно следим за развитием отрасли телекоммуникаций, 
            постоянно расширяем и модернизируем свою сеть
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Zap" className="mr-2" />
              Подключиться
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Phone" className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardHeader className="text-center">
              <CardTitle>Вход в личный кабинет</CardTitle>
              <CardDescription>Введите ваши данные для входа</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="login">Логин или номер договора</Label>
                <Input id="login" type="text" placeholder="Введите логин" />
              </div>
              <div>
                <Label htmlFor="password">Пароль</Label>
                <Input id="password" type="password" placeholder="Введите пароль" />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleLogin} className="flex-1">Войти</Button>
                <Button variant="outline" onClick={() => setShowLogin(false)} className="flex-1">
                  Отмена
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Customer Portal */}
      {isLoggedIn && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Личный кабинет</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="CreditCard" className="mr-2" />
                    Баланс
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">850 ₽</div>
                  <p className="text-gray-600">Текущий баланс</p>
                  <Button className="mt-3" size="sm">Пополнить</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Router" className="mr-2" />
                    Тариф
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-semibold">Стандарт</div>
                  <p className="text-gray-600">50 Мбит/с</p>
                  <Badge variant="secondary" className="mt-2">Активен</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Calendar" className="mr-2" />
                    Статистика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-semibold">24.5 ГБ</div>
                  <p className="text-gray-600">Трафик за месяц</p>
                  <div className="mt-2 bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-1/4"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Tariffs Section */}
      <section id="tariffs" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Тарифы</h2>
          
          <Tabs defaultValue="apartments" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="apartments">Многоквартирные дома</TabsTrigger>
              <TabsTrigger value="houses">Частные дома</TabsTrigger>
            </TabsList>
            
            <TabsContent value="apartments">
              <div className="grid md:grid-cols-3 gap-6">
                {apartments.map((tariff, index) => (
                  <Card key={index} className="relative hover:shadow-lg transition-shadow">
                    {index === 1 && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        Популярный
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">
                        {tariff.speed}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-4xl font-bold mb-4">
                        {tariff.price} <span className="text-lg text-gray-600">₽/мес</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {tariff.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center justify-center">
                            <Icon name="Check" className="mr-2 text-green-600" size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full">Подключить</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="houses">
              <div className="grid md:grid-cols-3 gap-6">
                {houses.map((tariff, index) => (
                  <Card key={index} className="relative hover:shadow-lg transition-shadow">
                    {index === 1 && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        Рекомендуем
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">
                        {tariff.speed}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-4xl font-bold mb-4">
                        {tariff.price} <span className="text-lg text-gray-600">₽/мес</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {tariff.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center justify-center">
                            <Icon name="Check" className="mr-2 text-green-600" size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full">Подключить</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Способы оплаты</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="CreditCard" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Банковские карты</h3>
                <p className="text-gray-600">Visa, MasterCard, МИР</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Smartphone" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Мобильные платежи</h3>
                <p className="text-gray-600">Apple Pay, Google Pay</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Building" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">В офисе</h3>
                <p className="text-gray-600">Наличными или картой</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Globe" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Интернет-банк</h3>
                <p className="text-gray-600">Онлайн переводы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ресурс-Связь — ведущий провайдер интернет-услуг, работающий на рынке 
                телекоммуникаций более 15 лет. Мы предоставляем качественные услуги 
                связи для жителей города и области.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Users" className="mr-3 text-primary" />
                  <span>Более 50,000 довольных клиентов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Award" className="mr-3 text-primary" />
                  <span>15+ лет на рынке телекоммуникаций</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" className="mr-3 text-primary" />
                  <span>99.9% время работы сети</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Наши преимущества</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Icon name="Zap" className="mr-3" />
                  Высокая скорость подключения
                </li>
                <li className="flex items-center">
                  <Icon name="Clock" className="mr-3" />
                  Техподдержка 24/7
                </li>
                <li className="flex items-center">
                  <Icon name="DollarSign" className="mr-3" />
                  Доступные цены
                </li>
                <li className="flex items-center">
                  <Icon name="Wrench" className="mr-3" />
                  Быстрая установка
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Phone" className="mr-2" />
                  Телефоны
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Техподдержка:</p>
                  <p>8 (800) 555-01-23</p>
                  <p className="font-semibold">Отдел продаж:</p>
                  <p>8 (800) 555-01-24</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Mail" className="mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>info@resurs-svyaz.ru</p>
                  <p>support@resurs-svyaz.ru</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" className="mr-2" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>г. Орел, ул. Ленина, 123</p>
                  <p>Режим работы:</p>
                  <p>Пн-Пт: 9:00 - 18:00</p>
                  <p>Сб: 10:00 - 16:00</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://orn.ru/style/img/resurs-logo.svg" alt="Ресурс-Связь" className="h-8 brightness-0 invert" />
                <span className="text-xl font-bold">Ресурс-Связь</span>
              </div>
              <p className="text-gray-400">
                Провайдер нового поколения с современными технологиями
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Интернет для дома</li>
                <li>Интернет для бизнеса</li>
                <li>IP-телефония</li>
                <li>Видеонаблюдение</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Техподдержка</li>
                <li>Личный кабинет</li>
                <li>Оплата услуг</li>
                <li>Часто задаваемые вопросы</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>8 (800) 555-01-23</p>
                <p>info@resurs-svyaz.ru</p>
                <p>г. Орел, ул. Ленина, 123</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Ресурс-Связь. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;