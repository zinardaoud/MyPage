class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/users/zinardaoud/repos")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
            )
    }
    render() {

        const { error, isLoaded, items } = this.state;
        if (error) {
            return (<div>Error: {error.message}</div>);
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            return (
                    <div class = "git-repo">
                        <h1>Projekt</h1>
                        
                        <ul>
                            <li>
                                <img src="./Media/stockolor.jpg" />
                                <div>
                                <h2>{items[0].name}</h2>
                                <p>{items[0].description}</p>
                                </div>
                            </li>
                            <li>
                                <img src="./Media/MaxPixel.net-Minimalist-Minimal-Modern-Cartoon-Flat-Avatar-5261896.png" />
                                <div>
                                <h2>{items[2].name}</h2>
                                <p>{items[2].description}</p>
                                </div>
                            </li>
                            <li>
                                <img id = "database-img" src="./Media/Data-Memory-Database-Cloud-4941301.png" />    
                                <div>
                                <h2>{items[4].name}</h2>
                                <p>{items[4].description}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
            );
        }
    }
}
ReactDOM.render(<MyComponent />, document.querySelector('.main'));