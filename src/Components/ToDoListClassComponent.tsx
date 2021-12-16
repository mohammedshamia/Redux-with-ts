import { Component } from "react";
import { addItemAction, getItems } from "../Redux/List/actions";
import { connect, ConnectedProps } from "react-redux";
import { AllListActions, IState } from "../@types/types";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../Redux/store";
import { Form, Formik, Field, FormikHelpers } from "formik";
import { addItemSchema } from "../Helpers/validation";
import { IAddItem } from "../@types/validation";

interface Props extends PropsFromRedux {}

class ToDoListClassComponent extends Component<Props> {
  handleAddItem = (
    values: IAddItem,
    formikHelpers: FormikHelpers<IAddItem>
  ) => {
    this.props.addItemAction({
      title: values.value,
      id: Math.random() * 1000,
    });
    formikHelpers.resetForm();
  };

  componentDidMount() {
    this.props.getItems();
  }

  /*  static getSnapshotBeforeUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>
  ): any {}*/

  render() {
    return (
      <div style={{ marginTop: 40 }}>
        <Formik
          initialValues={{
            value: "",
          }}
          onSubmit={this.handleAddItem}
          validationSchema={addItemSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name={"value"} type={"text"} />
              {errors.value && touched.value && <div>{errors.value}</div>}
              <button type={"submit"}>Add Item</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

/**
 * to pass the redux state to the component*/
const mapStateToProps = (
  state: AppState
): {
  list: IState;
} => ({
  list: state.list,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, any, AllListActions>
) => ({
  ...bindActionCreators({ getItems, addItemAction }, dispatch),
  /*Dispatch<AppState, any, AllListActions>
) => ({
  getItems: () =(getItems()),
  addItemAction: (value: ListItem) => dispatch(addItemAction(value)),
*/
});

const connector = connect(
  /**
     pass "mapStateToProps" as the first parameter
     (mapStateToProps, mapDispatchToProps)*/
  mapStateToProps,
  mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ToDoListClassComponent);
