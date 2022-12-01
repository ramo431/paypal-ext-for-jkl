const nikosConfig = Object.values(editableConfig);

const MainPageDollars = document.querySelector('.cw_tile-currency');
const MainPageEuros = document.querySelector('.cw_tile__balance-currenciesItem, test_balance-multi-currenciesItem');

const Main = nikosConfig[0];
const Dollars = nikosConfig[1];
const Euro = nikosConfig[2];
const EuroInUSD = nikosConfig[3];

if (MainPageDollars) {
	MainPageDollars.textContent = Main;
	MainPageEuros.textContent = Euro;
}

const interval = setInterval(() => {
	if (
		document.querySelector(
			'#contents > main > section > div > div > ul > li:nth-child(1) > div > span.flex-item.multiCurrency-label_right'
		)
	) {
		const WalletMain = document.querySelector(
			'#contents > main > section > div > div > div.fiDetails-content > div > p'
		);
		const WalletUSD = document.querySelector(
			'#contents > main > section > div > div > ul > li:nth-child(1) > div > span.flex-item.multiCurrency-label_right'
		);
		const WalletSide = document.querySelector(
			'#contents > main > div > section.fiListGroup-header.nemo_fiListGroup > ul > li.fiList-item.isSelected_ltr > a > span > span:nth-child(3) > span.fiListItem-identifier > span.fiListItem-amount.vx_text-3_regular'
		);
		const WalletEuro = document.querySelector(
			'#contents > main > section > div > div > ul > li:nth-child(2) > div > span.flex-item.multiCurrency-label_right'
		);

		WalletMain.textContent = Main;
		WalletUSD.textContent = Dollars;
		WalletEuro.outerHTML = `<span class='flex-item multiCurrency-label_right '>${Euro}<span class='vx_text-legal multiCurrencyLabel-secondaryText '>${EuroInUSD} in USD</span></span>`;
		WalletSide.textContent = Main;

		clearInterval(interval);
	}
}, 1);
