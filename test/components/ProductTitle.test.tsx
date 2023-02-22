import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';


describe('ProductTitle', () => {
    test('Must show the custom title', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className='custom-class'/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
        
    });

    test('Must show the component with the product name', () => { 
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {() => (
                    <ProductTitle />
                )}
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
     })
});