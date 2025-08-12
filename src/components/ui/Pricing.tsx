import React from 'react';
import Link from '@docusaurus/Link';

interface PricingFeature {
  text: string;
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  cta: {
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
  };
  popular?: boolean;
}

interface PricingProps {
  title: string;
  subtitle: string;
  description: string;
  tiers: PricingTier[];
  className?: string;
}

export function Pricing({
  title,
  subtitle,
  description,
  tiers,
  className = ''
}: PricingProps) {
  return (
    <div className={`relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 ${className}`}>
      {/* Background decoration */}
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div 
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">{subtitle}</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          {title}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
          {description}
        </p>
      </div>
      
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`relative rounded-3xl ${
              tier.popular 
                ? 'bg-gray-900 shadow-2xl ring-1 ring-gray-900/10' 
                : 'bg-white/60 ring-1 ring-gray-900/10'
            } p-8 sm:mx-8 sm:p-10 lg:mx-0 ${
              tier.popular 
                ? 'lg:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl' 
                : 'lg:rounded-t-3xl lg:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
            }`}
          >
            <h3 
              className={`text-base/7 font-semibold ${
                tier.popular ? 'text-indigo-400' : 'text-indigo-600'
              }`}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className={`text-5xl font-semibold tracking-tight ${
                tier.popular ? 'text-white' : 'text-gray-900'
              }`}>
                {tier.price}
              </span>
              <span className={`text-base ${
                tier.popular ? 'text-gray-400' : 'text-gray-500'
              }`}>
                /{tier.period}
              </span>
            </p>
            <p className={`mt-6 text-base/7 ${
              tier.popular ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {tier.description}
            </p>
            
            <ul role="list" className={`mt-8 space-y-3 text-sm/6 ${
              tier.popular ? 'text-gray-300' : 'text-gray-600'
            } sm:mt-10`}>
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex gap-x-3">
                  <svg 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className={`h-6 w-5 flex-none ${
                      tier.popular ? 'text-indigo-400' : 'text-indigo-600'
                    }`}
                  >
                    <path 
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" 
                      clipRule="evenodd" 
                      fillRule="evenodd" 
                    />
                  </svg>
                  {feature.text}
                </li>
              ))}
            </ul>
            
            <Link
              to={tier.cta.href}
              className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold sm:mt-10 ${
                tier.cta.variant === 'primary'
                  ? tier.popular
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  : 'text-gray-900 ring-1 ring-inset ring-gray-200 hover:ring-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
              }`}
            >
              {tier.cta.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
