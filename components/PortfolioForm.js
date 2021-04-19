


import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";



const PortfolioForm = ({ onSubmit, initialData = {} }) => {
  const { register, handleSubmit, control, reset } = useForm({ defaultValues: initialData });



  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="form-group">
        <label for="headTitle">ヘッドタイトル</label>


        {initialData.portfolio &&
          <input
            ref={register}
            name="headTitle"
            type="text"
            className="form-control"
            id="headTitle"
            defaultValue={initialData.portfolio.headTitle}
          />
        }
        {!initialData.portfolio &&
          <input
            ref={register}
            name="headTitle"
            type="text"
            className="form-control"
            id="headTitle"
          />
        }
      </div>



      <div className="form-group">
        <label for="title">タイトル</label>
        {initialData.portfolio &&
          <input
            ref={register}
            name="title"
            type="text"
            className="form-control"
            id="title"
            defaultValue={initialData.portfolio.title}
          />
        }
        {!initialData.portfolio &&
          <input
            ref={register}
            name="title"
            type="text"
            className="form-control"
            id="title"
          />
        }
      </div>


      <div className="form-group">
        <label for="description">詳細</label>
        {initialData.portfolio &&
          <textarea
            ref={register}
            name="description"
            rows="5"
            type="text"
            className="form-control"
            id="description"
            defaultValue={initialData.portfolio.description}
          ></textarea>
        }
        {!initialData.portfolio &&
          <textarea
            ref={register}
            name="description"
            rows="5"
            type="text"
            className="form-control"
            id="description"
          ></textarea>
        }
      </div>



      <div className="form-group">
        <label for="classification">分類</label>
        {initialData.portfolio &&
          <input
            ref={register}
            name="classification"
            type="text"
            className="form-control"
            id="classification"
            defaultValue={initialData.portfolio.classification}
          />
        }
        {!initialData.portfolio &&
          <input
            ref={register}
            name="classification"
            type="text"
            className="form-control"
            id="classification"
          />
        }
      </div>

      <div className="form-group">
        <label for="slideUrl">スライドURL</label>
        {initialData.portfolio &&
          <input
            ref={register}
            name="slideUrl"
            type="text"
            className="form-control"
            id="slideUrl"
            defaultValue={initialData.portfolio.slideUrl}
          />
        }
        {!initialData.portfolio &&
          <input
            ref={register}
            name="slideUrl"
            type="text"
            className="form-control"
            id="slideUrl"
          />
        }
      </div>

      <div className="form-group">
        <label for="webSite">Web URL</label>
        {initialData.portfolio &&
          <input
            ref={register}
            name="webSite"
            type="text"
            className="form-control"
            id="webSite"
            defaultValue={initialData.portfolio.webSite}
          />
        }
        {!initialData.portfolio &&
          <input
            ref={register}
            name="webSite"
            type="text"
            className="form-control"
            id="webSite"
          />
        }
      </div>


      <button
        type="submit"
        className="btn btn-primary">Create
      </button>
    </form>
  )
}

export default PortfolioForm;