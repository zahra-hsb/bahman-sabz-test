import ProductsGrid from "@/components/pages/products/ProductsGrid";
import { Container } from "@chakra-ui/react";

export default async function ProductsPage() {
  return (
    <Container padding={20}>
      <ProductsGrid />
    </Container>
  );
}
