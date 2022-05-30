import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { v4 as uuidv4 } from 'uuid';
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: "",
      name: "",
      img: "",
      size: "",
      price: "",
      IdCategoriesNews: "",
    };
    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
    this.showEditProduct = this.showEditProduct.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      axios({
        method: "GET",
        url: `https://627b0cc6b54fe6ee008187ed.mockapi.io/news/${id}`,
        data: null
      })
        .then((res) => {
          var data = res.data;
          this.setState({
            id: data.id,
            name: data.name,
            img: data.img,
            size: data.size,
            price: data.price,
            IdCategoriesNews: data.IdCategoriesNews,
          });
        })
        .catch((err) => {});
    }
    axios
      .get("https://627b0cc6b54fe6ee008187ed.mockapi.io/news")
      .then((res) => {
        this.setState({ products: res.data });
      });
    if (this.state.id == "") {
      document.getElementById("image-edit").style.display = "none";
    } else {
      document.getElementById("image-edit").style.display = "block";
    }
  }
  getProduct = (id) => {
    for (var i = 0; i < this.state.products.length; i++) {
      if (this.state.products[i].id === id) {
        return this.state.products[i];
      }
    }
    return null;
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onChangeImage = (event) => {
    this.setState({
      [event.target.name]: "image/" + event.target.files[0].name
    });
    console.log(event.target.files[0].name);
  };
  showEditProduct = (id) => {
    var product = this.getProduct(id);
    this.setState({
      id: product.id,
      name: product.name,
      img: product.img,
      size: product.size,
      price: product.price,
      IdCategoriesNews: product.IdCategoriesNews,
    });
    document.getElementById("image-edit").style.display = "block";
    alert(id);
  };
  getIndexProducts = (id) => {
    for (var i = 0; i < this.state.products.length; i++) {
      if (this.state.products[i].id === id) {
        return i;
      }
    }
    return -1;
  };
  onSave = (event) => {
    event.preventDefault();
    if (this.state.id == "") {
      if (
        this.state.name !== "" &&
        this.state.img !== "" &&
        this.state.size !== "" &&
        this.state.price !== "" &&
        this.state.IdCategoriesNews !== ""
      ) {
        axios({
          method: "POST",
          url: `https://627b0cc6b54fe6ee008187ed.mockapi.io/news`,
          data: {
            name: this.state.name,
            img: this.state.img,
            size: this.state.size,
            price: this.state.price,
            IdCategoriesNews: this.state.IdCategoriesNews,
          },
        }).then((res) => {
          this.componentDidMount();
          alert("Successfully");
        });
      } else {
        alert("Empty something");
      }
    } else {
      axios({
        method: "PUT",
        url: `https://627b0cc6b54fe6ee008187ed.mockapi.io/news/${this.state.id}`,
        data: {
          name: this.state.name,
          img: this.state.img,
          size: this.state.size,
          price: this.state.price,
          IdCategoriesNews: this.state.IdCategoriesNews,
        },
      }).then((res) => {
        this.componentDidMount();
        alert("Successfully");
      });
    }
    this.setState({
      id: "",
      name: "",
      img: "",
      size: "",
      price: "",
      IdCategoriesNews: "",
    });
  };
  onDelete = (id) => {
    console.log(id);
    axios({
      method: "DELETE",
      url: `https://627b0cc6b54fe6ee008187ed.mockapi.io/news/${id}`,
      data: null
    }).then((res) => {
      if (res.status === 200) {
        var index = this.getIndexProducts(id);
        if (index !== -1) {
          var products = this.state.products;
          products.splice(index, 1);
        }
        this.setState({
          products: products
        });
        alert(id);
        toast.success("Delete product successfully", {});
      }
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 card bg-dark">
            <form onSubmit={this.onSave} className="text-white">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Category</label>
                <input
                  type="text"
                  name="IdCategoriesNews"
                  value={this.state.IdCategoriesNews}
                  onChange={this.onChange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter category"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail2">Size</label>
                <input
                  type="text"
                  name="size"
                  onChange={this.onChange}
                  value={this.state.size}
                  className="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  placeholder="Enter size"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail2">Price</label>
                <input
                  type="text"
                  name="price"
                  onChange={this.onChange}
                  value={this.state.price}
                  className="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  placeholder="Enter price"
                />
              </div>
              <div className="form-group">
                <label>Image</label>
                <input
                  type="file"
                  name="img"
                  onChange={this.onChangeImage}
                  className="form-control"
                  placeholder="img"
                />
              </div>
              <div
                className="form-group"
                id="image-edit"
                style={{ display: "none" }}
              >
                <label>Image</label>
                {/* "./" +  */}
                <img src={"./" + this.state.img} style={{ width: "100px" }} />
              </div>
              <button type="submit" className="btn btn-danger">
                Submit
              </button>
            </form>
          </div>
          <div className="col-8">
            <div className="row">
              {this.state.products.map((product) => (
                <div className="card col-4" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    // "./" +
                    src={"./" + product.img}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="row">
                      <div className="col-6">Price: ${product.price}</div>
                    </div>

                    <button
                      className="btn btn-primary"
                      onClick={() => this.showEditProduct(product.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.onDelete(product.id)}
                    >
                      delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;