import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';


describe('ProductImage', () => {
    test('Must show the custom image', () => {
        const wrapper = renderer.create(
            <ProductImage img="./my-custom-image.png" className='custom-class'/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
        
    });

    test('Must show the component with the product image', () => { 
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {() => (
                    <ProductImage />
                )}
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
     })
});