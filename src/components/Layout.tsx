import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const Layout = ({ children, currentPage = 'home' }: LayoutProps) => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const navigation = [
    { name: 'Главная', href: '/', id: 'home' },
    { name: 'Тарифы', href: '/tariffs', id: 'tariffs' },
    { name: 'Оплата', href: '/payment', id: 'payment' },
    { name: 'О компании', href: '/about', id: 'about' },
    { name: 'Контакты', href: '/contacts', id: 'contacts' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="https://orn.ru/style/img/resurs-logo.svg" alt="Ресурс-Связь" className="h-10 filter brightness-0" />
            <h1 className="text-2xl font-bold text-primary">Ресурс-Связь</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`transition-colors ${
                  currentPage === item.id
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.name}
              </a>
            ))}
            <Button onClick={() => setShowLogin(!showLogin)} variant={isLoggedIn ? "secondary" : "default"}>
              {isLoggedIn ? "Личный кабинет" : "Войти"}
            </Button>
          </nav>
        </div>
      </header>

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
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Личный кабинет</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Icon name="CreditCard" className="mr-2" size={20} />
                    Баланс
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">850 ₽</div>
                  <p className="text-gray-600 text-sm">Текущий баланс</p>
                  <Button className="mt-3" size="sm">Пополнить</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Icon name="Router" className="mr-2" size={20} />
                    Тариф
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-semibold">Стандарт</div>
                  <p className="text-gray-600 text-sm">50 Мбит/с</p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      Активен
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Статистика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-semibold">24.5 ГБ</div>
                  <p className="text-gray-600 text-sm">Трафик за месяц</p>
                  <div className="mt-2 bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-1/4"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main>{children}</main>

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
                <li><a href="/tariffs" className="hover:text-white transition-colors">Интернет для дома</a></li>
                <li><a href="/tariffs" className="hover:text-white transition-colors">Интернет для бизнеса</a></li>
                <li><a href="#" className="hover:text-white transition-colors">IP-телефония</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Видеонаблюдение</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/contacts" className="hover:text-white transition-colors">Техподдержка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Личный кабинет</a></li>
                <li><a href="/payment" className="hover:text-white transition-colors">Оплата услуг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Часто задаваемые вопросы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>8 (4862) 44-44-44</p>
                <p>info@resurs-svyaz.ru</p>
                <p>г. Орёл, ул. Ленина, 123</p>
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

export default Layout;