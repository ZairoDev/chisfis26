"use client";

// PageAddListing2.tsx
import React, { FC, useEffect, useState } from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';
import ButtonSecondary from '@/shared/ButtonSecondary';
import Input from '@/shared/Input';
import Select from '@/shared/Select';
import FormItem from '../FormItem';
import dynamic from 'next/dynamic';
import { LoadScript } from '@react-google-maps/api';
import PlacesAutocomplete from '@/components/PlacesAutocomplete';
import axios from 'axios';
import LocationMap from '@/components/LocationMap';

const Map = dynamic(() => import('@/components/LocationMap'), { ssr: false });

interface Page2State {
  country: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  center: { lat: number; lng: number };
}

const PageAddListing2: FC = () => {
  const [address, setAddress] = useState<string>("");
  const [country, setCountry] = useState<string>("Greece");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [center, setCenter] = useState<{ lat: number; lng: number }>({ lat: 0, lng: 0 });

  const handlePlaceSelected = (place: any) => {
    setAddress(place.address);
    setCountry(place.country);
    setState(place.state);
    setCity(place.city);
    setStreet(place.street);
    setPostalCode(place.postalCode);
    setCenter({ lat: place.lat, lng: place.lng });
  };

  const [page2, setPage2] = useState<Page2State>({
    country,
    street,
    city,
    state,
    postalCode,
    center,
  });

  useEffect(() => {
    const newPage2: Page2State = {
      country,
      street,
      city,
      state,
      postalCode,
      center,
    };
    setPage2(newPage2);
    localStorage.setItem('page2', JSON.stringify(newPage2));
  }, [country, street, city, state, postalCode, center]);

  return (
    <div>
      <FormItem label="Country/Region">
        <Select onChange={(e) => setCountry(e.target.value)} value={country}>
          <option value="Greece">Greece</option>
          <option value="Italy">Italy</option>
          <option value="Cyprus">Cyprus</option>
          <option value="US">US</option>
          <option value="Netherlands">Netherlands</option>
          <option value="UK">UK</option>
          <option value="Hungary">Hungary</option>
          <option value="Turkey">Turkey</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Lithuania">Lithuania</option>
          <option value="Malta">Malta</option>
          <option value="Romania">Romania</option>
          <option value="Spain">Spain</option>
          <option value="Croatia">Croatia</option>
          <option value="Portugal">Portugal</option>
          <option value="Slovenia">Slovenia</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Viet Nam">Viet Nam</option>
          <option value="Thailand">Thailand</option>
          <option value="France">France</option>
          <option value="Singapore">Singapore</option>
          <option value="Japan">Japan</option>
          <option value="Korea">Korea</option>
        </Select>
      </FormItem>

      <h2 className="text-sm mt-2">Your place location</h2>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
        libraries={['places']}
      >
        <div className=" w-full bg-transparent ">
          <PlacesAutocomplete
            onPlaceSelected={handlePlaceSelected}
            countryCode={country} // Pass country as countryCode prop
          />
        </div>
      </LoadScript>

      <div className="space-y-8">
        <FormItem label="Street">
          <Input
            placeholder="..."
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </FormItem>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
          <FormItem label="City">
            <Input value={city} onChange={(e) => setCity(e.target.value)} />
          </FormItem>
          <FormItem label="State">
            <Input value={state} onChange={(e) => setState(e.target.value)} />
          </FormItem>
          <FormItem label="Postal code">
            <Input
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </FormItem>
          <div>
            <h1>Coordinates</h1>
            <div className="flex gap-32 w-full mt-2">
              <div className="flex gap-2">
                <h4 className=" text-sm">Latitude: </h4>
                <h4 className=" text-sm">{center.lat}</h4>
              </div>
              <div className="flex gap-2">
                <h4 className="text-sm">Longitude: </h4>
                <h4 className="text-sm">{center.lng}</h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="">Detailed Address</label>
          <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 flex gap-1">
            <h2>{street} </h2>
            <h2>{city} </h2>
            <h2>{state} </h2>
            <h2>{country}</h2>
          </div>
          <div className="mt-4">
            <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
              <LocationMap latitude={center.lat} longitude={center.lng} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageAddListing2;
