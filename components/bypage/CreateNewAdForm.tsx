import { useAuth } from "context/useAuth";
import { NEWAD_FORM_MODEL } from "projConstants";
import React, { useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import DashboardStyles from "styles/Dashboard.module.css";
import moment from "moment";
import api from "api";
import { angry, happy } from "utils/toaster";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FormStateType = Record<string, any>;

const Button = dynamic(() => import("components/common/Button"));

const CreateNewAdForm = () => {
  const { profile } = useAuth();
  const { register, watch, reset } = useForm(); // react-hook-form methods

  // form states
  const FORM_INIT_STATE = {
    isSubmitting: false,
    data: undefined,
  };

  // form states reducer
  const [formState, setFormState] = useReducer(
    (formState: FormStateType, newFormStates: FormStateType) => ({
      ...formState,
      ...newFormStates,
    }),
    FORM_INIT_STATE
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const NEWAD_INIT_VALUES: Record<string, any> = {
    title: "",
    subject: "",
    description: "",

    businessId: profile?.id,
    businessName: profile?.full_name,
    businessEmail: profile?.email,

    startDate: moment(new Date()).format("YYYY-MM-DD"),
    endDate: moment(new Date()).format("YYYY-MM-DD"),
    status: "OPEN",

    moneyMin: 0,
    moneyMax: 0,

    type: "", // PHOTO | VIDEO
    platform: "", // enums
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _genInput = (model: Record<string, any>[]) => {
    return [...model].map(
      ({ id, label, type, required, placeholder, registerAs, disabled, min }) => {
        return (
          <label key={id} htmlFor={id} className='input-group-md w-full text-right'>
            <span className='font-bold'>
              {label} {required && <span className='text-red-400'>*</span>}
            </span>
            <div className='tooltip w-full' data-tip={label}>
              <input
                defaultValue={NEWAD_INIT_VALUES[id]}
                required={required}
                disabled={disabled || (formState.isSubmitting as boolean)}
                id={registerAs}
                type={type}
                min={min}
                placeholder={placeholder}
                className='input input-bordered input-primary w-full'
                {...register(registerAs)}
              />
            </div>
          </label>
        );
      }
    );
  };

  // update submit handler
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitData = async (e: any) => {
    e.preventDefault();
    setFormState({ isSubmitting: true });

    const createNewRes = await api.post("http://184.73.229.188:8090/api/v1/events/", {
      ...formState.data,
    });

    const createSuccess = (await createNewRes.status) === 201;
    if (!createSuccess) {
      setFormState({ isSubmitting: false });
      angry("Cannot create new event add");
      return;
    }

    reset();
    happy("Created new event ad!");
    setFormState({ isSubmitting: false });
  };

  // detect changes
  useEffect(() => {
    const subscription = watch((value) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const currentData: any = {
        ...value,
        startDate: new Date(value.startDate).valueOf() / 1000,
        endDate: new Date(value.endDate).valueOf() / 1000,
        subject: NEWAD_INIT_VALUES["description"],
        businessId: NEWAD_INIT_VALUES["businessId"],
        businessName: NEWAD_INIT_VALUES["businessName"],
        businessEmail: NEWAD_INIT_VALUES["businessEmail"],
        status: 0,
      };

      setFormState({ data: currentData });
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form
      id='new-event-form'
      onSubmit={handleSubmitData}
      data-theme='light'
      className='h-full w-full flex flex-col 
        gap-3 overflow-y-scroll scrollbar-hide px-4'
    >
      {_genInput(NEWAD_FORM_MODEL)}

      <label key='type' htmlFor='type' className='input-group-md w-full text-right'>
        <span className='font-bold'>
          Event Type <span className='text-red-400'>*</span>
        </span>
        <select
          required
          disabled={formState.isSubmitting as boolean}
          {...register("type")}
          className='select select-primary w-full'
          defaultValue=''
        >
          <option value='' disabled>
            Choose an event type
          </option>
          <option value='PHOTO'>PHOTO</option>
          <option value='VIDEO'>VIDEO</option>
        </select>
      </label>

      <label key='platform' htmlFor='platform' className='input-group-md w-full text-right'>
        <span className='font-bold'>
          Platform <span className='text-red-400'>*</span>
        </span>
        <select
          required
          disabled={formState.isSubmitting as boolean}
          {...register("platform")}
          className='select select-primary w-full'
          defaultValue=''
        >
          <option value='' disabled>
            Choose a platform
          </option>
          <option value='FACEBOOK'>FACEBOOK</option>
          <option value='INSTAGRAM'>INSTAGRAM</option>
          <option value='TIKTOK'>TIKTOK</option>
          <option value='YOUTUBE'>YOUTUBE</option>
        </select>
      </label>

      {/* submit button */}
      <Button
        // disabled={formState.hasNoChanges as boolean}
        className={`${DashboardStyles.createBtn}`}
      >
        CREATE
      </Button>
    </form>
  );
};

export default CreateNewAdForm;
