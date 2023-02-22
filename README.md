# AA-TS-Product-Card

This is a test package to deploy in NPM

### Andy Alvarado

## Example

```
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons
} from 'aa-ts-product-card';
```

```
<ProductCard 
    product={ product }
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
    ({
        reset,
        count,
        isMaxCountReached,
        increaseBy
    }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )
    }
</ProductCard>
```