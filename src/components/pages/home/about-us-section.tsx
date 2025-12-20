import { Heart, Leaf, Palette, User } from 'lucide-react'
import Image from 'next/image'

const VALUES = [
  {
    icon: Heart,
    title: 'Свежесть',
    description:
      'Мы гарантируем свежесть каждого букета благодаря прямым поставкам от производителей',
  },
  {
    icon: Leaf,
    title: 'Экологичность',
    description:
      'Мы заботимся о природе и используем только экологически чистые материалы для упаковки',
  },
  {
    icon: Palette,
    title: 'Мастерство',
    description: 'Наши флористы создают уникальные композиции, которые радуют глаз и душу',
  },
]

const TEAM_MEMBERS = [
  {
    name: 'Анна Петрова',
    role: 'Главный флорист',
    image: '/flower-product.png',
    description: 'Опыт работы более 10 лет. Специализируется на свадебных букетах.',
  },
  {
    name: 'Дмитрий Смирнов',
    role: 'Менеджер по закупкам',
    image: '/flower-product.png',
    description: 'Находит лучшие цветы от проверенных поставщиков по всему миру.',
  },
  {
    name: 'Елена Иванова',
    role: 'Дизайнер композиций',
    image: '/flower-product.png',
    description: 'Создает авторские букеты для особых случаев и мероприятий.',
  },
]

export function ReviewsSection() {
  return (
    <div className='relative right-1/2 left-1/2 w-screen -translate-x-1/2 bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8'>
        <section className='mb-32'>
          <div className='grid gap-16 lg:grid-cols-2 lg:items-center'>
            <div className='order-2 lg:order-1'>
              <h2 className='mb-6 text-4xl font-bold'>Наша история</h2>
              <div className='text-muted-foreground space-y-4 text-lg leading-relaxed'>
                <p>
                  Наш путь начался в 2020 году с простой идеи — сделать доступными свежие и
                  красивые цветы для каждого. Мы верим, что цветы — это не просто подарок, а
                  способ выразить эмоции и создать особенные моменты.
                </p>
                <p>
                  За годы работы мы выстроили прямые отношения с лучшими производителями
                  цветов и создали команду профессиональных флористов, которые вкладывают
                  душу в каждый букет. Наша миссия — приносить радость и красоту в жизнь
                  наших клиентов.
                </p>
                <p>
                  Сегодня мы гордимся тем, что тысячи людей доверяют нам самые важные
                  моменты своей жизни — от свадеб до простых знаков внимания близким. Каждый
                  букет — это частичка нашего сердца и мастерства.
                </p>
              </div>
            </div>

            <div className='order-1 lg:order-2'>
              <div className='overflow-hidden rounded-3xl'>
                <Image
                  src='/flower-product.png'
                  alt='Our Story'
                  width={600}
                  height={700}
                  className='h-full w-full object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='mb-32'>
          <div className='mb-12 text-center'>
            <h2 className='mb-4 text-4xl font-bold'>Наши ценности</h2>
            <p className='text-muted-foreground text-lg'>
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            {VALUES.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className='rounded-2xl border bg-white p-8 text-center transition-all hover:shadow-lg'
                >
                  <div className='bg-primary/10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full'>
                    <Icon className='text-primary h-10 w-10' />
                  </div>
                  <h3 className='mb-3 text-2xl font-bold'>{value.title}</h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        <section>
          <div className='mb-12 text-center'>
            <h2 className='mb-4 text-4xl font-bold'>Познакомьтесь с командой</h2>
            <p className='text-muted-foreground text-lg'>
              Профессионалы, которые создают магию каждый день
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className='overflow-hidden rounded-2xl border bg-white shadow-sm'
              >
                <div className='aspect-square overflow-hidden'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className='h-full w-full object-cover transition-transform duration-500 hover:scale-110'
                  />
                </div>
                <div className='p-6'>
                  <div className='mb-1 flex items-center gap-2'>
                    <User className='text-primary h-5 w-5' />
                    <h3 className='text-xl font-bold'>{member.name}</h3>
                  </div>
                  <p className='text-primary mb-3 text-sm font-medium'>{member.role}</p>
                  <p className='text-muted-foreground text-sm leading-relaxed'>
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
