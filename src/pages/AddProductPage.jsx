import React, {useEffect, useState} from 'react';
import {ProductCard} from "../components";
import {useNavigate} from "react-router-dom";

const AddProductPage = ({setProducts}) => {
    const [inputValues, setInputValues] = useState(JSON.parse(localStorage.getItem('addProductValues')) || {
        name: '',
        description: '',
        discount: 0,
        discountColor: '#0d6efd',
        price: 0,
        photo_url: '',
    })

    const [fileReader] = useState(new FileReader());
    const navigate = useNavigate();

    useEffect(() => {
        fileReader.addEventListener('load', () => {
            setInputValues(prev => Object.assign({...prev, photo_url: fileReader.result}))
            console.log(typeof fileReader.result)

        })

        return () => {
            fileReader.removeEventListener('load', () => {
                setInputValues(prev => Object.assign({...prev, photo_url: fileReader.result}))
            })
        }
    }, [fileReader]);

    useEffect(() => {
        localStorage.setItem('addProductValues', JSON.stringify(inputValues));
    }, [inputValues]);

    const onSubmit = (e) => {
        e.preventDefault();

        const product = Object.assign({...inputValues, id: Date.now(), reviews:[]})

        setProducts(prev => {
            let products = [...prev];
            products.push(product);
            return products;
        });

        localStorage.removeItem('addProductValues');
        alert('Товар добавлен');
        navigate('/');
    }

    const onChange = (e) => {
        const {id, value, type, files} = e.currentTarget;
        switch (type) {
            case 'file':
                fileReader.readAsDataURL(files[0]);
                break;
            case 'number':
                setInputValues(prev => Object.assign({...prev, [id]: +value}));
                break;
            default:
                setInputValues(prev => Object.assign({...prev, [id]: value}));
        }
    }

    return (
        <>
            <main className={'container-xxl pt-5 pb-5'}>
                <h1 className={'fs-1 fw-semibold mb-4'}>Добавить товар</h1>
                <div className={'d-flex gap-5 flex-wrap'}>
                    <div className={'addProduct-form'}>
                        <span className={'fw-semibold fs-4 mb-3 d-block'}>Характеристики</span>
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Навзание</label>
                                <input type="text" className="form-control" id="name"
                                       required
                                       value={inputValues.name}
                                       onChange={onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Описание</label>
                                <input type="text" className="form-control" id="description"
                                       required
                                       value={inputValues.description}
                                       onChange={onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Цена <span
                                    className={'text-secondary'}>₽</span></label>
                                <input type="number" className="form-control" id="price" min={0} step={1}
                                       required
                                       value={inputValues.price}
                                       onChange={onChange}
                                />
                            </div>
                            <div className={'d-flex'}>
                                <div className="mb-3 w-100 me-1">
                                    <label htmlFor="discount" className="form-label">Скидка <span
                                        className={'text-secondary'}>%</span></label>
                                    <input type="number" className="form-control" id="discount" min={0} max={100} step={1}
                                           value={inputValues.discount}
                                           onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3 flex-shrink-0 ms-1">
                                    <label htmlFor="discountColor" className="form-label">Цвет скидки</label>
                                    <input type="color" className="form-control p-0" id="discountColor"
                                           value={inputValues.discountColor}
                                           onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="photo_url" className="form-label">Фотография</label>
                                <input type="file" className="form-control" id="photo_url"
                                       accept={'.jpg, .jpeg, .png'}
                                       onChange={onChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-3">Добавить товар</button>
                        </form>
                    </div>
                    <div className={'addProduct-preview'}>
                        <span className={'fw-semibold fs-4 mb-3 d-block'}>Предпросмотр</span>
                        <div className={'card p-4'}>
                            <ProductCard product={inputValues} hideButton className={'w-100'}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AddProductPage;