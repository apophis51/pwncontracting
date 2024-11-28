
import BlongRenderHorizontal from '@/public/components/BlongRenderHorizontal';

export default function TestComponent() {
    return (
    
        <div role="tablist" className="tabs tabs-lifted w-screen max-w-full">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    Tab content 1
  </div>

  <input
    type="radio"
    name="my_tabs_2"
    role="tab"
    className="tab"
    aria-label="Tab 2"
    defaultChecked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 ">
    <p>Tab content 2</p>
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    Tab content 3
  </div>
</div>
    )
}
