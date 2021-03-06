import * as React from "react";
import { Header, Button } from "semantic-ui-react";

interface SettingProps {
}

interface SettingState {

    // hasError: boolean,
    user: {
        name: string
    }
}

class MyErrorBoundry extends React.Component<{children:any}, { hasError: boolean }> {
    /**
     *
     */
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------

    componentDidCatch(error, info) {
        console.log('toli | error = ', error);
        console.log('toli | info = ', info);
        this.setState({ hasError: false });
        // sendToErrorReporting(error, info);
    }

    //-------------------------------------------------------------------------------------------------------

    render() {

        if (this.state.hasError) {
            return (
                <div>
                    Sorry an error occured!.
                </div>
            );
        }
        return this.props.children ;
    }


}


const Profile = props => (
    <div>
        Update user: {props.user.name}
    </div>
)


export default class Settings extends React.Component<SettingProps, SettingState> {

    constructor(props) {
        super(props);

        this.state = { user: { name: 'Cris' }};
        // this.state = { user: { name: 'Cris' }, hasError: false };

    }


    private updateClicked = (): void => {
        this.setState(state => ({ ...state, user: null }));
        // debugger;
    }

    render() {

        // if (this.state.hasError) {
        //     return (
        //         <div>
        //             Sorry an error occured!.
        //         </div>
        //     );
        // }
        return (<div>
            <Header>This is my Settings</Header>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, similique ut. Ullam dolore reprehenderit adipisci voluptatum! Vel natus dolore id, tempore non sapiente iure, sequi velit ipsam libero quae aspernatur commodi ipsa, vitae temporibus incidunt alias doloremque! Dolorum temporibus eos fugit id error incidunt vel tempore tenetur blanditiis eveniet, aut soluta, ipsam optio neque quos voluptatum odit placeat animi libero inventore deleniti? Dolorum voluptates laboriosam eaque dolores facilis maxime veniam sunt sapiente sed nesciunt debitis quam iusto commodi velit saepe culpa eos, ea mollitia explicabo laborum iure ullam? Obcaecati aut velit accusamus, porro consequuntur neque et iure eveniet, quam dicta sint perspiciatis nulla! Perspiciatis ullam dolores voluptatum aliquid quae, eos eius soluta debitis eveniet ipsam in quas. Debitis, quam? Placeat tenetur sequi labore, impedit corporis maiores. Sed atque assumenda quo, minima quibusdam, eligendi iste architecto minus dolore amet deleniti eos nisi maxime nobis asperiores commodi animi sapiente velit. Repellat quam quia pariatur assumenda velit illo non doloribus, amet nihil iusto corrupti odit praesentium perspiciatis provident, obcaecati ea asperiores placeat qui nostrum. Numquam sed officiis quo laudantium odio voluptates alias corrupti esse, necessitatibus consectetur delectus odit ad! Molestiae animi nisi illo veritatis provident. Perspiciatis eius voluptatum animi voluptate hic, est nostrum repellendus dolorum eligendi totam repudiandae sit similique velit consectetur, reprehenderit vel ea voluptatem, aliquam ratione voluptatibus dolore quam! Rem accusantium pariatur vel facere fuga vitae natus officiis perferendis. Voluptatibus, deserunt. Quam, accusantium natus cupiditate veniam vel provident cum perferendis esse commodi numquam voluptatum quos aspernatur. Repellendus, delectus, quaerat, aliquid cum totam quis ab dolores exercitationem repudiandae doloribus at odit temporibus vel similique! Ducimus officia molestiae nobis eum debitis magni at? Et dolore assumenda id dignissimos possimus quod sit, omnis placeat fugit eligendi vitae rem accusamus? Culpa, similique illum porro, praesentium enim sint delectus, recusandae corporis nam non veniam. Architecto adipisci neque aliquam, ab perferendis officiis, totam laborum quam pariatur facere dolore cumque veniam quas ut quo voluptates in quasi fugit inventore debitis tenetur illum libero? Eaque vero, dignissimos magnam numquam quaerat repudiandae exercitationem. Iure, sequi mollitia! Quis asperiores maxime sequi similique quidem minus temporibus praesentium consectetur earum explicabo! Ipsum architecto neque distinctio. Atque animi harum, dolores minima illum libero impedit eos enim sequi architecto. Nostrum architecto deserunt quaerat, ex, alias laudantium cumque quisquam fugiat doloribus quo labore, ipsum repellendus dolor reprehenderit ducimus. Mollitia quaerat exercitationem, aperiam temporibus dolor necessitatibus dignissimos itaque non nostrum vel nemo sequi dolorum adipisci? Recusandae at exercitationem ad voluptate, explicabo sequi dolore saepe nemo sit, reiciendis, labore neque consequatur velit consectetur iste? Amet, repudiandae! Necessitatibus temporibus maxime id. In nobis, aperiam repellat adipisci alias earum id rerum sapiente obcaecati odio eum voluptas magni quia labore sed esse a magnam natus vitae accusantium atque omnis ullam voluptatum! Consequuntur magni libero aspernatur repellat rerum accusantium rem dolorum ipsam facere repellendus quisquam atque corporis ex sint assumenda, hic voluptatem perspiciatis enim quia? Architecto, nisi dolorem. Similique adipisci quod officiis laudantium impedit inventore omnis necessitatibus! Nesciunt eligendi error a distinctio sit autem voluptatem, placeat ipsam dicta laborum omnis iure sint.</p>

            <div>
                <MyErrorBoundry>
                    <Profile user={this.state.user} />
                    <Button onClick={this.updateClicked} > update </Button>
                </MyErrorBoundry>
            </div>
        </div>);
    }
}