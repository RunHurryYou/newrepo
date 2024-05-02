<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import Header from './lib/Header.svelte'
  import { onMount } from 'svelte'

  let fieldValue="0"
  let selValue="USD"
  let field2Value="0"
  let sel2Value="USD"
  let fetch_data: { [key: string]: number }
  const API_ENDPOINT = 'https://v6.exchangerate-api.com/v6/c32c9a630aa3a46e7f3ef543/latest/USD'
  onMount(async () => {
  const response = await fetch(API_ENDPOINT)
  const data = await response.json()
  fetch_data = data.conversion_rates
  console.log(fetch_data)
  })

  function convert1(event: CustomEvent<{ fieldValue: string; selValue: string }>){
    fieldValue=event.detail.fieldValue
    selValue=event.detail.selValue
    let test=fetch_data[sel2Value]/fetch_data[selValue]*Number(fieldValue)
    field2Value=String(test)
  }
  function convert2(event: CustomEvent<{ fieldValue: string; selValue: string }>){
    field2Value=event.detail.fieldValue
    sel2Value=event.detail.selValue
    let test=fetch_data[selValue]/fetch_data[sel2Value]*Number(field2Value)
    fieldValue=String(test)
  }
  function refreshBt(){
    onMount(async () => {
    const response = await fetch(API_ENDPOINT)
    const data = await response.json()
    fetch_data = data.conversion_rates
    console.log(fetch_data)
  })
    let test=fetch_data[selValue]/fetch_data[sel2Value]*Number(field2Value)
    fieldValue=String(test)
  }
</script>
<Header/>
<main>
  <div class="card">
    <Counter data={fetch_data} selname={"1"} inpname={"inp1"} fieldValue={fieldValue} selValue={selValue} on:input={convert1}/>
    <!-- <a href="javascript:void(0);" on:click={change} class="abtn">
      <img src={arrows} alt="arrows">
    </a> -->
    <Counter data={fetch_data} selname={"2"} inpname={"inp2"} fieldValue={field2Value} selValue={sel2Value} on:input={convert2}/>
  </div>
  <button on:click={refreshBt}>
    Update exchange rate
  </button>

</main>

<style>
  main{
    display: flex;
    flex-direction: column;
    background-color: #41b3a3;
    border: 1px solid #41b3a3;
    border-radius: 8px;
    padding: 2em;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  .card{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  
</style>
