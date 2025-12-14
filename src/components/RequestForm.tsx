import React from 'react';
import { Button } from "@/components/ui/button"; 

export const RequestForm = () => {
  return (
    <section className="py-20 text-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Текстовая часть */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Получите бесплатную консультацию
            </h2>
            <p className="text-lg mb-8">
              Оставьте заявку, и наш консультант поможет подобрать идеальный курс для ваших целей
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Поможем выбрать направление</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Расскажем о программе обучения</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Ответим на все вопросы</span>
              </div>
            </div>
          </div>

          {/* Форма справа */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1">Имя</label>
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Телефон</label>
                <input 
                  type="tel" 
                  placeholder="+7 (999) 000-00-00" 
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">
                Оставить заявку
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RequestForm;