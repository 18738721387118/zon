import { Button } from '@/components/shared/button'
import { RatingStars } from '@/components/shared/rating-stars'

export function ProductDescriptionSection() {
  const price = 3500
  const rating = 4.7

  return (
    <div className='flex flex-col items-start gap-2.5'>
      <div className='inline-flex items-center gap-1'>
        <RatingStars rating={rating} />

        <span className='text-foreground text-sm font-medium'>(7 отзывов)</span>
      </div>

      <div className='text-5xl font-extrabold'>Саган-дайля</div>

      <div className='mt-1'>
        <div className='text-md font-medium'>Описание:</div>

        <div className='text-muted-foreground mt-1 text-sm'>
          Букет из 15 веток ромашковых хризантем, оформленный в крафтовую бумагу. Ширина
          букета — от 40 до 55 см, в зависимости от степени раскрытия; длина — около 55 см.
          Упаковка — крафт. Хризантемы — любимые цветы многих людей, полюбившиеся
          способностью долго стоять в воде, сохраняя свежесть и наполняя пространство
          приятным ароматом. Указаны примерные размеры, чтобы вы могли представить внешний
          вид и масштаб, однако фактические параметры могут немного отличаться.
        </div>
      </div>

      <div className='mt-1'>
        <div className='text-md font-medium'>Цена:</div>

        <div className='flex items-center gap-2 leading-none font-semibold'>
          <span className='text-muted-foreground text-sm line-through'>
            {Math.floor(price * 1.3).toLocaleString('ru-RU')} ₽
          </span>
          <span className='text-lg'>{price.toLocaleString('ru-RU')} ₽</span>
        </div>
      </div>

      <Button size='lg' className='text-md mt-3 rounded-md font-semibold'>
        Купить за 3500 ₽
      </Button>
    </div>
  )
}
