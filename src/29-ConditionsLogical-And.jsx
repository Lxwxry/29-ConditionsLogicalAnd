function ConditionsLogicalAnd() {
    
    const isAuth = false;

        return 
        (
        <div>
            {isAuth && <p>Вы авторизованы</p>}
            {!isAuth && <p>Пожалуйста, авторизуйтесь</p>}
        </div>
        );

}

export default ConditionsLogicalAnd;