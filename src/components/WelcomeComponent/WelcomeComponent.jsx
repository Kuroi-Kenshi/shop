import s from './WelcomeComponent.module.sass';

const WelcomeComponent = () => {
    return (
        <section className={s.wrapper}>
            <h1 className={s.title}>Добро пожаловать в наш магазин!</h1>
            <p className={s.description}>Выберите категорию товаров в списке слева</p>
        </section>
    );
}

export default WelcomeComponent;