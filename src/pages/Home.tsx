import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Интернет нового поколения
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Провайдер нового тысячелетия. Мы постоянно следим за развитием отрасли телекоммуникаций, 
            постоянно расширяем и модернизируем свою сеть. В числе первых внедряем новые технологии на своей сети.
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

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Высокая скорость</h3>
              <p className="text-gray-600">До 1 Гбит/с по оптоволоконным линиям связи</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Надёжность</h3>
              <p className="text-gray-600">99.9% время работы сети и резервированные каналы</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Поддержка 24/7</h3>
              <p className="text-gray-600">Круглосуточная техническая поддержка клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <p className="text-gray-600">Довольных клиентов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">Лет на рынке</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-600">Время работы сети</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Техподдержка</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;