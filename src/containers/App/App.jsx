import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import { addGoodsData } from '../../store/actions'
import { getData } from '../../utils/getData'
import Header from '../../components/Header'
import WelcomeComponent from '../../components/WelcomeComponent'
import CategoriesList from '../../components/CategoriesList'
import Content from '../../components/Content'

import s from './App.module.sass';

function App() {
    const dispatch = useDispatch()
    const [fetchError, setFetchError] = useState({
        isError: false,
        errorCode: ''
    })
    const url = 'https://datainlife.ru/junior_task/get_products.php'

    useEffect(() => {
        getData(url)
            .then(data => dispatch(addGoodsData(data)))
            .catch(err => {
                console.log(err);
                setFetchError({
                    isError: true,
                    errorCode: err.message
                })
            })
    }, [])

    return (
        <div className={s.App}>
            <Header />
            <BrowserRouter>
                <main className={s.main}>
                    <div className={s.wrapper}>
                        {fetchError.isError ? <h1>Ошибка получения данных. {fetchError.errorCode}</h1> :
                            (
                                <>
                                    <CategoriesList />
                                    <Route path="/" component={WelcomeComponent} exact></Route>
                                    <Route path="/categories/:id" component={Content} exact></Route>
                                </>
                            )}

                    </div>
                </main>
            </BrowserRouter>
        </div>
    )
}

export default App;
