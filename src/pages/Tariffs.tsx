import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Tariffs = () => {
  // Актуальные тарифы с сайта orn.ru/home
  const apartments = [
    {
      name: "Новичок 2",
      speed: "50 Мбит/с",
      price: "450",
      features: ["Безлимитный интернет", "Увеличенная скорость", "СМС-уведомления о платежах", "Статический IP-адрес", "Техподдержка 24/7"]
    },
    {
      name: "Верный",
      speed: "100 Мбит/с", 
      price: "650",
      features: ["Безлимитный интернет", "Высокая скорость круглосуточно", "Статический IP-адрес", "СМС-уведомления", "Техподдержка 24/7", "Бесплатная отсрочка платежа"]
    },
    {
      name: "Шустрый",
      speed: "200 Мбит/с",
      price: "950",
      features: ["Безлимитный интернет", "Максимальная скорость 200 Мбит/с", "Статический IP-адрес", "СМС-уведомления", "Техподдержка 24/7", "Бесплатная отсрочка платежа", "IP-телевидение"]
    }
  ];

  const houses = [
    {
      name: "Дом 100",
      speed: "100 Мбит/с",
      price: "417",
      features: ["Оптоволокно до дома", "GPON технология", "Безлимитный интернет", "Монтаж и настройка", "Техподдержка 24/7"]
    },
    {
      name: "Дом 500",
      speed: "500 Мбит/с",
      price: "850", 
      features: ["Оптоволокно до дома", "Высокая скорость GPON", "Безлимитный интернет", "Видеонаблюдение", "Домофон", "Техподдержка 24/7", "Wi-Fi роутер в комплекте"]
    },
    {
      name: "Интернет безлимитный 40+",
      speed: "1000 Мбит/с",
      price: "1200",
      features: ["Максимальная скорость до 1 Гбит/с", "FTTB/GPON технология", "Безлимитный интернет", "Статический IP", "Видеонаблюдение", "Умный дом", "Техподдержка 24/7", "Профессиональный монтаж"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Тарифы на интернет</h1>
          <p className="text-xl text-gray-600">Выберите подходящий тариф для вашего дома</p>
        </div>
        
        <Tabs defaultValue="apartments" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="apartments">Многоквартирные дома</TabsTrigger>
            <TabsTrigger value="houses">Частные дома</TabsTrigger>
          </TabsList>
          
          <TabsContent value="apartments">
            <div className="grid md:grid-cols-3 gap-6">
              {apartments.map((tariff, index) => (
                <Card key={index} className="relative hover:shadow-lg transition-shadow bg-white">
                  {index === 1 && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600">
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
                    <ul className="space-y-3 mb-6 text-left">
                      {tariff.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Icon name="Check" className="mr-3 text-green-600 flex-shrink-0" size={16} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Подключить тариф</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="houses">
            <div className="grid md:grid-cols-3 gap-6">
              {houses.map((tariff, index) => (
                <Card key={index} className="relative hover:shadow-lg transition-shadow bg-white">
                  {index === 1 && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600">
                      Хит продаж
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
                    <ul className="space-y-3 mb-6 text-left">
                      {tariff.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Icon name="Check" className="mr-3 text-green-600 flex-shrink-0" size={16} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Подключить тариф</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Дополнительные услуги</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Icon name="Tv" size={32} className="mx-auto mb-3 text-blue-600" />
                <h4 className="font-semibold mb-2">IP-телевидение</h4>
                <p className="text-gray-600">Более 150 каналов в HD качестве</p>
              </div>
              <div>
                <Icon name="Phone" size={32} className="mx-auto mb-3 text-blue-600" />
                <h4 className="font-semibold mb-2">IP-телефония</h4>
                <p className="text-gray-600">Безлимитные звонки по России</p>
              </div>
              <div>
                <Icon name="Video" size={32} className="mx-auto mb-3 text-blue-600" />
                <h4 className="font-semibold mb-2">Видеонаблюдение</h4>
                <p className="text-gray-600">Системы безопасности для дома</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tariffs;