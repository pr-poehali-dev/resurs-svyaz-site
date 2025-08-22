import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-xl text-gray-600">Свяжитесь с нами удобным способом</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Phone" className="mr-2" />
                  Телефоны
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">Техподдержка (круглосуточно):</p>
                  <p className="text-xl text-blue-600 font-semibold">8 (4862) 44-44-44</p>
                  <p className="text-gray-600">Бесплатно с мобильных и городских</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Отдел продаж:</p>
                  <p className="text-xl text-blue-600 font-semibold">8 (4862) 44-44-45</p>
                  <p className="text-gray-600">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Корпоративным клиентам:</p>
                  <p className="text-xl text-blue-600 font-semibold">8 (4862) 44-44-46</p>
                  <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
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
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold">Общие вопросы:</p>
                  <p className="text-blue-600">info@resurs-svyaz.ru</p>
                </div>
                <div>
                  <p className="font-semibold">Техподдержка:</p>
                  <p className="text-blue-600">support@resurs-svyaz.ru</p>
                </div>
                <div>
                  <p className="font-semibold">Корпоративным клиентам:</p>
                  <p className="text-blue-600">b2b@resurs-svyaz.ru</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" className="mr-2" />
                  Офисы обслуживания
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">Главный офис:</p>
                  <p>г. Орёл, ул. Ленина, 123, офис 45</p>
                  <p className="text-gray-600">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</p>
                  <p className="text-gray-600">Вс: выходной</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Офис на Октябрьской:</p>
                  <p>г. Орёл, ул. Октябрьская, 67</p>
                  <p className="text-gray-600">Пн-Пт: 10:00-19:00, Сб: 10:00-15:00</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Офис в ТЦ "Гринн":</p>
                  <p>г. Орёл, Наугорское шоссе, 19, 1 этаж</p>
                  <p className="text-gray-600">Ежедневно: 10:00-21:00</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" className="mr-2" />
                  Экстренная связь
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">При аварийных ситуациях:</p>
                <p className="text-xl text-red-600 font-semibold">8 (4862) 44-44-00</p>
                <p className="text-gray-600">Круглосуточно, без выходных</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Обратная связь</CardTitle>
                <p className="text-gray-600">Напишите нам, и мы свяжемся с вами в течение часа</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (xxx) xxx-xx-xx" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Тема обращения</Label>
                  <Input id="subject" placeholder="Кратко опишите тему" />
                </div>
                
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Опишите ваш вопрос подробнее" rows={4} />
                </div>
                
                <Button className="w-full">
                  <Icon name="Send" className="mr-2" />
                  Отправить сообщение
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Отправляя форму, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>

            {/* Additional Services */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Дополнительные услуги</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Truck" className="mr-3 text-blue-600" />
                  <div>
                    <p className="font-semibold">Выезд специалиста</p>
                    <p className="text-sm text-gray-600">Бесплатно в черте города</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Settings" className="mr-3 text-blue-600" />
                  <div>
                    <p className="font-semibold">Настройка оборудования</p>
                    <p className="text-sm text-gray-600">Включена в стоимость подключения</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" className="mr-3 text-blue-600" />
                  <div>
                    <p className="font-semibold">Гарантия на услуги</p>
                    <p className="text-sm text-gray-600">Полное возмещение при сбоях</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Как нас найти</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon name="MapPin" size={48} className="mx-auto mb-2" />
                  <p>Интерактивная карта с офисами</p>
                  <p className="text-sm">г. Орёл, ул. Ленина, 123</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacts;