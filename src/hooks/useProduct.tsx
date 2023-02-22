import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void,
    value?: number,
    initialValues?: InitialValues,
    maxCount?: number
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs ) => {
    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false)    

    const increaseBy = (value:number) => {
        const newValue = Math.max(Math.min(counter + value, initialValues?.maxCount || 9999999), 0);

        setCounter(newValue);

        onChange && onChange({
            count: newValue,
            product,
            maxCount: initialValues?.maxCount
        });
    }

    useEffect(() => {
        if( !isMounted.current ) return;

        setCounter( value )
    }, [ value ])


    useEffect(() => {
        isMounted.current = true;
    }, []);

    const reset = () => {
        setCounter( initialValues?.count || value )
    }
    
    return {
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues?.maxCount <= counter,

        reset
    }
}
