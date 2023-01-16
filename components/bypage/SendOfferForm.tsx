import api from "api";
import { useAuth } from "context/useAuth";
import dynamic from "next/dynamic";
import { SENDOFFER_FORM_MODEL } from "projConstants";
import { useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";
import DashboardStyles from "styles/Dashboard.module.css";
import { formatted } from "utils/time";
import { angry, happy } from "utils/toaster";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FormStateType = Record<string, any>;
const Button = dynamic(() => import("components/common/Button"));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SendOfferForm = ({ eventData }: any) => {
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
  const SENDOFFER_INIT_VALUES: Record<string, any> = {
    money: parseInt(eventData.moneyMin, 10),
    duration: 1,
    status: "OPEN",
    influencerId: profile?.id,
    message: "I would love to ...",
    event_id: eventData.id,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _genInput = (model: Record<string, any>[]) => {
    return [...model].map(
      ({ id, label, type, required, placeholder, registerAs, disabled, min, max }) => {
        return (
          <label key={id} htmlFor={id} className='input-group-md w-full text-right'>
            <span className='font-bold'>
              {label} {required && <span className='text-red-400'>*</span>}
            </span>
            <div className='tooltip w-full' data-tip={label}>
              <input
                defaultValue={SENDOFFER_INIT_VALUES[id]}
                required={required}
                disabled={disabled || (formState.isSubmitting as boolean)}
                id={registerAs}
                type={type}
                min={min}
                max={max}
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

    const sendOfferRes = await api.post("http://184.73.229.188:8090/api/v1/offers/", {
      ...formState.data,
    });

    const sendSuccess = (await sendOfferRes.status) === 201;
    if (!sendSuccess) {
      setFormState({ isSubmitting: false });
      angry("Cannot send offer");
      return;
    }

    reset();
    happy("Offer sent!");
    setFormState({ isSubmitting: false });
  };

  // detect changes
  useEffect(() => {
    const subscription = watch((value) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const currentData: any = {
        ...value,
        influencerId: SENDOFFER_INIT_VALUES["influencerId"],
        event_id: SENDOFFER_INIT_VALUES["event_id"],
        money: parseInt(value.money, 10),
        duration: parseInt(value.duration, 10),
        status: 0,
      };

      setFormState({ data: currentData });
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className='w-full h-full overflow-y-scroll scrollbar-hide'>
      <h1 className='text-[2rem]'>{eventData.title}</h1>
      <p className='text-[1.2rem] line-clamp-3'>{eventData.description}</p>
      <div className='divider'>Partner Company</div>
      <div className='flex flex-col gap-2 my-5'>
        <p>
          <strong>Platform: </strong> {eventData.platform}
        </p>
        <p>
          <strong>Business Partner: </strong> {eventData.businessName} - {eventData.businessEmail}
        </p>
        <p>
          <strong>From: </strong> {formatted(eventData.startDate)}
        </p>
        <p>
          <strong>To: </strong> {formatted(eventData.endDate)}
        </p>
      </div>
      <div className='divider'>Submit Offer</div>
      <form
        id='send-offer-form'
        onSubmit={handleSubmitData}
        data-theme='light'
        className='h-full w-full flex flex-col 
        gap-3 overflow-y-scroll scrollbar-hide px-4'
      >
        {_genInput(SENDOFFER_FORM_MODEL)}

        <label key='money' htmlFor='money' className='input-group-md w-full text-right'>
          <span className='font-bold'>
            Desired Payment <span className='text-red-400'>*</span>
          </span>
          <div
            className='tooltip w-full'
            data-tip={`You are offered from ${eventData.moneyMin} to ${eventData.moneyMax} USD`}
          >
            <input
              defaultValue={SENDOFFER_INIT_VALUES["money"]}
              required
              disabled={formState.isSubmitting as boolean}
              id='money'
              type='number'
              min={eventData.moneyMin}
              max={eventData.moneyMax}
              placeholder='Please provide your desired payment in USD'
              className='input input-bordered input-primary w-full'
              {...register("money")}
            />
          </div>
        </label>

        {/* submit button */}
        <Button
          // disabled={formState.hasNoChanges as boolean}
          className={`${DashboardStyles.createBtn}`}
        >
          SEND OFFER
        </Button>
      </form>
    </div>
  );
};

export default SendOfferForm;
