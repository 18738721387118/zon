import { Quote } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/shared/avatar'
import { RatingStars } from '@/components/shared/rating-stars'

interface Testimonial {
  name: string
  rating: number
  review: string
  avatar?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Мария',
    rating: 5,
    review:
      'Заказывала букет на день рождения подруги. Цветы пришли свежайшие, простояли больше недели! Флорист позвонил и уточнил все детали. Очень довольна сервисом и качеством.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
  },
  {
    name: 'Алексей',
    rating: 5,
    review:
      'Впервые заказывал цветы онлайн и не пожалел. Букет для жены на годовщину получился шикарный! Доставка точно в срок, упаковка красивая. Рекомендую!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexey',
  },
  {
    name: 'Екатерина',
    rating: 4.5,
    review:
      'Отличный магазин! Большой выбор, адекватные цены. Один раз была небольшая задержка с доставкой, но менеджер оперативно решил вопрос и предложил скидку на следующий заказ.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ekaterina',
  },
  {
    name: 'Дмитрий',
    rating: 5,
    review:
      'Заказываю здесь цветы регулярно для мамы и девушки. Всегда свежие, красиво оформленные букеты. Особенно нравится, что можно выбрать время доставки. Спасибо за качественную работу!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry',
  },
]

export function TestimonialsSection() {
  return (
    <section className='bg-linear-to-b from-gray-50 to-white py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-4xl font-bold'>Отзывы наших клиентов</h2>
          <p className='text-muted-foreground text-lg'>
            Узнайте, что говорят о нас наши покупатели
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className='relative rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md'
            >
              <div className='text-primary/20 absolute top-4 right-4'>
                <Quote className='h-8 w-8' />
              </div>

              <div className='mb-4 flex items-center gap-3'>
                <Avatar className='h-12 w-12'>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className='font-semibold'>{testimonial.name}</h3>
                  <div className='mt-1'>
                    <RatingStars rating={testimonial.rating} size='sm' showLabel={false} />
                  </div>
                </div>
              </div>

              <p className='text-muted-foreground text-sm leading-relaxed'>
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
