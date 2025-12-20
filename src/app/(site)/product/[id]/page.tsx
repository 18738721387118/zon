import { ProductPage } from '@/components/pages/product/product-page'

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function Product({ params }: ProductPageProps) {
  const { id } = await params

  return <ProductPage productId={id} />
}
