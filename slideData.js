const slideData = [
    {
        id: 'slide1',
        title: 'AI(Artificial Intelligence)',
        content: `
            <p>人工知能のこと。人間の知能や行動をコンピュータプログラムで再現する技術のことです。AIは、機械学習やディープラーニングなどの技術を用いて、データからパターンを学習し、問題を解決することができます。</p>
            <h3>特徴</h3>
            <ul>
                <li>自動化：AIは製造業やサービス業での自動化に使用されます。</li>
                <li>高度な処理：AIはビッグデータ解析やリアルタイムのデータ処理に使用されます。</li>
                <li>予測能力：AIはマーケティングや金融の予測分析に使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide2',
        title: 'API(Application Programming Interface)',
        content: `
            <p>ソフトウェア同士が情報をやり取りするためのインターフェースのことです。APIは、プログラム間でデータを共有するための規約や手順を定義し、プログラムの連携を可能にします。</p>
            <h3>種類</h3>
            <ul>
                <li>Web API：Webサービスと連携するためのAPI。例：Google Maps API。</li>
                <li>ライブラリAPI：外部ライブラリと連携するためのAPI。例：TensorFlow。</li>
                <li>OS API：オペレーティングシステムと連携するためのAPI。例：Windows API。</li>
            </ul>
        `
    },
    {
        id: 'slide3',
        title: 'AR(Augmented Reality)',
        content: `
            <p>現実世界にデジタル情報を重ね合わせる技術のことです。ARは、スマートフォンやタブレット、ARグラスなどのデバイスを使用して、現実世界に仮想のオブジェクトや情報を表示することができます。</p>
            <h3>特徴</h3>
            <ul>
                <li>現実と仮想の融合：ARは教育やトレーニングでのシミュレーションに使用されます。</li>
                <li>インタラクティブ：ARはエンターテインメントやゲームでのインタラクティブ体験に使用されます。</li>
                <li>多様な応用：ARは医療や建築設計での可視化に使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide4',
        title: 'ASCII(American Standard Code for Information Interchange)',
        content: `
            <p>アメリカ合衆国で標準化された文字コードのことです。ASCIIは、文字や記号をコンピュータで扱うための規格であり、英数字や記号などをコンピュータで表現するために使用されます。</p>
            <h3>特徴</h3>
            <ul>
                <li>7ビット：ASCIIはテキストファイルやプログラムコードの文字表現に使用されます。</li>
                <li>128文字：ASCIIは基本的な英数字や記号の表現に使用されます。</li>
                <li>制御文字：ASCIIは通信プロトコルやデータフォーマットでの制御に使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide5',
        title: 'BCP(Business Continuity Plan)',
        content: `
            <p>企業が災害や事故などの緊急事態に直面した際に、事業を継続するための計画のことです。BCPは、リスク管理の一環として策定され、事業の中断を最小限に抑えることを目的としています。</p>
            <h3>特徴</h3>
            <ul>
                <li>リスク評価：BCPは自然災害やサイバー攻撃に対するリスク評価に使用されます。</li>
                <li>緊急対応：BCPは緊急時の対応手順として使用されます。</li>
                <li>事業継続：BCPは金融機関や医療機関での事業継続計画に使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide6',
        title: 'BEMS(Building Energy Management System)',
        content: `
            <p>建物のエネルギー消費を管理するシステムのことです。BEMSは、エネルギーの使用状況を監視し、効率的なエネルギー管理を実現するためのツールです。</p>
            <h3>特徴</h3>
            <ul>
                <li>エネルギー監視：BEMSは商業ビルや工場でのエネルギー使用状況の監視に使用されます。</li>
                <li>効率化：BEMSはエネルギーコスト削減のための効率化に使用されます。</li>
                <li>コスト削減：BEMSは公共施設やオフィスビルでのエネルギーコスト削減に使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide7',
        title: 'BLE(Bluetooth Low Energy)',
        content: `
            <p>低消費電力で通信を行うBluetoothの規格のことです。BLEは、IoTデバイスやウェアラブルデバイスなど、バッテリー駆動のデバイスに広く使用されています。</p>
            <h3>特徴</h3>
            <ul>
                <li>低消費電力：BLEはフィットネストラッカーやスマートウォッチに使用されます。</li>
                <li>短距離通信：BLEはスマートホームデバイスやビーコンに使用されます。</li>
                <li>多様な応用：BLEは医療機器や産業用センサーに使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide8',
        title: 'BPO(Business Process Outsourcing)',
        content: `
            <p>企業の業務プロセスを外部の専門業者に委託することです。BPOは、コスト削減や業務効率化を目的として行われます。</p>
            <h3>特徴</h3>
            <ul>
                <li>コスト削減：BPOはカスタマーサポートやバックオフィス業務に使用されます。</li>
                <li>業務効率化：BPOはデータ入力や会計業務の効率化に使用されます。</li>
                <li>専門性：BPOはITサポートや人事管理の専門業者に委託されます。</li>
            </ul>
        `
    },
    {
        id: 'slide9',
        title: 'BPR(Business Process Reengineering)',
        content: `
            <p>企業の業務プロセスを根本的に見直し、再設計することです。BPRは、業務の効率化や競争力の向上を目的として行われます。</p>
            <h3>特徴</h3>
            <ul>
                <li>業務見直し：BPRは製造業やサービス業での業務プロセス見直しに使用されます。</li>
                <li>効率化：BPRは物流やサプライチェーンの効率化に使用されます。</li>
                <li>競争力向上：BPRは市場競争力の向上を目指す企業で使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide10',
        title: 'BYOD(Bring Your Own Device)',
        content: `
            <p>従業員が個人所有のデバイスを業務に使用することです。BYODは、柔軟な働き方を実現するための取り組みの一つです。</p>
            <h3>特徴</h3>
            <ul>
                <li>柔軟性：BYODはリモートワークやテレワークに使用されます。</li>
                <li>コスト削減：BYODは企業のデバイス購入コスト削減に使用されます。</li>
                <li>セキュリティ：BYODはセキュリティポリシーの強化が必要です。</li>
            </ul>
        `
    },
    {
        id: 'slide11',
        title: 'CAD(Computer-Aided Design)',
        content: `
            <p>コンピュータを使用して設計を行う技術のことです。CADは、建築、機械、電子などの分野で広く使用されています。</p>
            <h3>特徴</h3>
            <ul>
                <li>設計効率化：CADは建築設計や機械設計に使用されます。</li>
                <li>精度向上：CADは電子回路設計や製品デザインに使用されます。</li>
                <li>多様な応用：CADはインテリアデザインや都市計画に使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide12',
        title: 'CAM(Computer-Aided Manufacturing)',
        content: `
            <p>コンピュータを使用して製造を行う技術のことです。CAMは、製造プロセスの自動化や効率化を実現します。</p>
            <h3>特徴</h3>
            <ul>
                <li>製造自動化：CAMは自動車製造や電子機器製造に使用されます。</li>
                <li>効率化：CAMは部品加工や組立ラインの効率化に使用されます。</li>
                <li>精度向上：CAMは精密機器や航空機部品の製造に使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide13',
        title: 'CAE(Computer-Aided Engineering)',
        content: `
            <p>コンピュータを使用して工学解析を行う技術のことです。CAEは、製品設計や開発の効率化を支援します。</p>
            <h3>特徴</h3>
            <ul>
                <li>解析効率化：CAEは構造解析や流体解析に使用されます。</li>
                <li>精度向上：CAEはシミュレーションやモデリングに使用されます。</li>
                <li>多様な応用：CAEは自動車設計や建築工学に使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide14',
        title: 'CDP(Customer Data Platform)',
        content: `
            <p>顧客データを統合・管理するためのプラットフォームのことです。CDPは、マーケティングや顧客対応の効率化を支援します。</p>
            <h3>特徴</h3>
            <ul>
                <li>データ統合：CDPは顧客データの一元管理に使用されます。</li>
                <li>効率化：CDPはマーケティングキャンペーンの効率化に使用されます。</li>
                <li>分析支援：CDPは顧客行動分析やパーソナライズに使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide15',
        title: 'CEO(Chief Executive Officer)',
        content: `
            <p>企業の最高経営責任者のことです。CEOは、企業の経営戦略を策定し、実行する責任を負います。</p>
            <h3>特徴</h3>
            <ul>
                <li>経営戦略：CEOは企業の長期戦略策定に使用されます。</li>
                <li>意思決定：CEOは重要な経営意思決定に関与します。</li>
                <li>リーダーシップ：CEOは企業のリーダーシップを発揮します。</li>
            </ul>
        `
    },
    {
        id: 'slide16',
        title: 'CFO(Chief Financial Officer)',
        content: `
            <p>企業の最高財務責任者のことです。CFOは、企業の財務戦略を策定し、実行する責任を負います。</p>
            <h3>特徴</h3>
            <ul>
                <li>財務戦略：CFOは資金調達や投資戦略に使用されます。</li>
                <li>資金管理：CFOは企業の資金管理に使用されます。</li>
                <li>リスク管理：CFOは財務リスクの管理に使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide17',
        title: 'CFT(Cross-Functional Team)',
        content: `
            <p>異なる部門のメンバーで構成されるチームのことです。CFTは、複雑なプロジェクトや課題に対して、部門横断的な視点で取り組むことができます。</p>
            <h3>特徴</h3>
            <ul>
                <li>部門横断：CFTは新製品開発やプロセス改善に使用されます。</li>
                <li>多様な視点：CFTは異なる専門知識を持つメンバーで構成されます。</li>
                <li>協力：CFTは部門間の協力を促進します。</li>
            </ul>
        `
    },
    {
        id: 'slide18',
        title: 'CIO(Chief Information Officer)',
        content: `
            <p>企業の最高情報責任者のことです。CIOは、企業の情報戦略を策定し、実行する責任を負います。</p>
            <h3>特徴</h3>
            <ul>
                <li>情報戦略：CIOはIT戦略やデジタル化戦略に使用されます。</li>
                <li>IT管理：CIOは企業のITインフラ管理に使用されます。</li>
                <li>デジタル化：CIOは企業のデジタルトランスフォーメーションに使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide19',
        title: 'CRM(Customer Relationship Management)',
        content: `
            <p>顧客関係管理のことです。CRMは、顧客との関係を構築・維持し、顧客満足度を向上させるための戦略やツールを指します。</p>
            <h3>特徴</h3>
            <ul>
                <li>顧客データ管理：CRMは顧客データベースの管理に使用されます。</li>
                <li>関係構築：CRMは顧客との長期的な関係構築に使用されます。</li>
                <li>満足度向上：CRMはカスタマーサポートやマーケティングに使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide20',
        title: 'CSF(Critical Success Factor)',
        content: `
            <p>企業が成功するために重要な要因のことです。CSFは、企業の戦略目標を達成するために必要な要素を特定し、管理するためのフレームワークです。</p>
            <h3>特徴</h3>
            <ul>
                <li>成功要因特定：CSFはプロジェクト管理や戦略立案に使用されます。</li>
                <li>戦略目標達成：CSFは企業の目標達成に向けた指標として使用されます。</li>
                <li>管理フレームワーク：CSFは経営管理やパフォーマンス評価に使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide21',
        title: 'CTI(Computer Telephony Integration)',
        content: `
            <p>CTI（Computer Telephony Integration）とは、コンピュータと電話システムを統合する技術のことです。CTIは、電話応対業務の効率化や顧客サービスの向上を目的としています。</p>
            <h3>特徴</h3>
            <ul>
                <li>業務効率化：CTIはコールセンターでの電話応対業務を効率化します。</li>
                <li>顧客サービス向上：CTIは顧客サービスの向上に寄与し、顧客満足度を高めます。</li>
                <li>データ連携：CTIは顧客データと電話システムを連携させ、顧客情報を即座に参照できます。</li>
            </ul>
        `
    },
    {
        id: 'slide22',
        title: 'CTO(Chief Technology Officer)',
        content: `
            <p>CTO（Chief Technology Officer）とは、企業の最高技術責任者のことです。CTOは、企業の技術戦略を策定し、技術開発を指導する責任を負います。</p>
            <h3>特徴</h3>
            <ul>
                <li>技術戦略：CTOは企業の技術戦略を策定し、新技術の導入を推進します。</li>
                <li>技術開発：CTOは技術開発チームを指導し、革新的な製品を開発します。</li>
                <li>イノベーション：CTOは技術革新を推進し、企業の競争力を高めます。</li>
            </ul>
        `
    },
    {
        id: 'slide23',
        title: 'CSV(Comma-Separated Values)',
        content: `
            <p>CSV（Comma-Separated Values）とは、データをカンマで区切って表現するファイル形式のことです。CSVは、データの交換や保存に広く使用されています。</p>
            <h3>特徴</h3>
            <ul>
                <li>シンプル：CSVはシンプルな形式でデータを表現し、ExcelやGoogle Sheetsで簡単に開けます。</li>
                <li>互換性：CSVは多くのソフトウェアでサポートされ、データのやり取りが容易です。</li>
                <li>可読性：CSVは人間が読みやすい形式で、データの確認や編集が簡単です。</li>
            </ul>
        `
    },
    {
        id: 'slide24',
        title: 'CPU(Central Processing Unit)',
        content: `
            <p>CPU（Central Processing Unit）とは、コンピュータの中央処理装置のことです。CPUは、コンピュータの演算や制御を行う主要なハードウェアです。</p>
            <h3>特徴</h3>
            <ul>
                <li>演算能力：CPUは高い演算能力を持ち、複雑な計算を高速に処理します。</li>
                <li>制御機能：CPUはコンピュータ全体の制御を行い、各種デバイスの動作を管理します。</li>
                <li>多様な用途：CPUはデスクトップPC、ノートPC、サーバーなどさまざまなコンピュータシステムで使用されます。</li>
            </ul>
        `
    },
    {
        id: 'slide25',
        title: 'CUI(Character User Interface)',
        content: `
            <p>CUI（Character User Interface）とは、文字ベースのユーザーインターフェースのことです。CUIは、コマンドラインインターフェースとも呼ばれ、キーボード入力によって操作されます。</p>
            <h3>特徴</h3>
            <ul>
                <li>効率性：CUIはシステム管理やプログラミングで効率的に操作できます。</li>
                <li>柔軟性：CUIはスクリプトやコマンドを使って柔軟な操作が可能です。</li>
                <li>学習曲線：CUIは習得に時間がかかることがありますが、習得すれば強力なツールとなります。</li>
            </ul>
        `
    },
    {
        id: 'slide26',
        title: 'CSR(Corporate Social Responsibility)',
        content: `
            <p>CSR（Corporate Social Responsibility）とは、企業の社会的責任のことです。CSRは、企業が社会や環境に対して責任を持ち、持続可能な発展を目指す取り組みを指します。</p>
            <h3>特徴</h3>
            <ul>
                <li>社会貢献：CSRは地域社会への貢献活動やボランティア活動を含みます。</li>
                <li>環境保護：CSRは環境保護活動を推進し、エコフレンドリーな製品開発を行います。</li>
                <li>持続可能性：CSRは持続可能な発展を目指し、長期的な企業価値の向上を図ります。</li>
            </ul>
        `
    },
    {
        id: 'slide27',
        title: 'DFD(Data Flow Diagram)',
        content: `
            <p>DFD（Data Flow Diagram）とは、データの流れを視覚的に表現する図のことです。DFDは、システムのデータ処理や情報の流れを理解するために使用されます。</p>
            <h3>特徴</h3>
            <ul>
                <li>視覚化：DFDはシステムのデータフローを視覚的に表現し、理解を助けます。</li>
                <li>理解促進：DFDはシステムの構造やデータの流れを明確にし、設計や分析を支援します。</li>
                <li>設計支援：DFDはシステム設計の初期段階で使用され、効率的なシステム開発を支援します。</li>
            </ul>
        `
    },
    {
        id: 'slide28',
        title: 'DHCPサーバ(Dynamic Host Configuration Protocol Server)',
        content: `
            <p>DHCPサーバ（Dynamic Host Configuration Protocol Server）とは、ネットワーク上のデバイスに自動的にIPアドレスを割り当てるサーバのことです。DHCPサーバは、ネットワーク管理を簡素化します。</p>
            <h3>特徴</h3>
            <ul>
                <li>自動割り当て：DHCPサーバは企業ネットワークや家庭内ネットワークでIPアドレスを自動的に割り当てます。</li>
                <li>管理簡素化：DHCPサーバはネットワーク管理者の手間を減らし、管理を簡素化します。</li>
                <li>効率化：DHCPサーバはネットワークの効率的な運用を支援し、IPアドレスの競合を防ぎます。</li>
            </ul>
        `
    },
    {
        id: 'slide29',
        title: 'DMZ(Demilitarized Zone)',
        content: `
            <p>DMZ（Demilitarized Zone）とは、内部ネットワークと外部ネットワークの間に設置される中間ネットワークのことです。DMZは、セキュリティを強化し、外部からの攻撃を防ぐために使用されます。</p>
            <h3>特徴</h3>
            <ul>
                <li>セキュリティ強化：DMZは企業のWebサーバやメールサーバを外部攻撃から保護します。</li>
                <li>攻撃防御：DMZは外部からの攻撃を防ぎ、内部ネットワークへの侵入を防止します。</li>
                <li>中間ネットワーク：DMZは内部ネットワークと外部ネットワークの間に設置され、セキュリティを強化します。</li>
            </ul>
        `
    },
    {
        id: 'slide30',
        title: 'DNSサーバ(Domain Name System Server)',
        content: `
            <p>DNSサーバ（Domain Name System Server）とは、ドメイン名とIPアドレスを対応付けるサーバのことです。DNSサーバは、インターネット上での名前解決を行います。</p>
            <h3>特徴</h3>
            <ul>
                <li>名前解決：DNSサーバはWebサイトのドメイン名をIPアドレスに変換し、アクセスを可能にします。</li>
                <li>インターネットの基盤：DNSサーバはインターネットの基盤技術であり、全てのインターネット通信に不可欠です。</li>
                <li>分散管理：DNSサーバは分散管理され、信頼性と可用性を高めています。</li>
            </ul>
        `
    },
    // ...existing slides...

    {
        id: 'slide31',
        title: 'DoS(Denial of Service)',
        content: `
                    <p>DoS（Denial of Service）とは、サービス拒否攻撃のことです。DoS攻撃は、ターゲットのサーバやネットワークに過剰な負荷をかけて、正常なサービス提供を妨害する攻撃手法です。</p>
                    <h3>特徴</h3>
                    <ul>
                        <li>過負荷：DoS攻撃はターゲットに過剰な負荷をかけます。</li>
                        <li>サービス停止：DoS攻撃はサービスの停止を引き起こします。</li>
                        <li>多様な手法：DoS攻撃にはさまざまな手法があります。</li>
                    </ul>
                `
    },
    {
        id: 'slide32',
        title: 'DPI(Deep Packet Inspection)',
        content: `
                    <p>DPI（Deep Packet Inspection）とは、ネットワーク上のデータパケットを詳細に解析する技術のことです。DPIは、ネットワークのセキュリティやトラフィック管理に使用されます。</p>
                    <h3>特徴</h3>
                    <ul>
                        <li>詳細解析：DPIはデータパケットを詳細に解析します。</li>
                        <li>セキュリティ強化：DPIはネットワークのセキュリティを強化します。</li>
                        <li>トラフィック管理：DPIはネットワークトラフィックを管理します。</li>
                    </ul>
                `
    },
    {
        id: 'slide33',
        title: 'DRAM(Dynamic Random Access Memory)',
        content: `
                    <p>DRAM（Dynamic Random Access Memory）とは、コンピュータの主記憶装置として広く使用されるメモリの一種です。DRAMは、データを一時的に保存し、高速な読み書きが可能です。</p>
                    <h3>特徴</h3>
                    <ul>
                        <li>高速：DRAMは高速な読み書きが可能です。</li>
                        <li>揮発性：DRAMは電源を切るとデータが消失します。</li>
                        <li>広範な使用：DRAMはコンピュータの主記憶装置として広く使用されます。</li>
                    </ul>
                `
    },
    {
        id: 'slide34',
        title: 'DX(Digital Transformation)',
        content: `
                    <p>DX（Digital Transformation）とは、デジタル技術を活用してビジネスや社会の変革を推進することです。DXは、業務効率化や新たな価値創造を目指します。</p>
                    <h3>特徴</h3>
                    <ul>
                        <li>技術活用：DXはデジタル技術を活用します。</li>
                        <li>業務効率化：DXは業務の効率化を図ります。</li>
                        <li>価値創造：DXは新たな価値を創造します。</li>
                    </ul>
                `
    },
    {
        id: 'slide35',
        title: 'EDI(Electronic Data Interchange)',
        content: `
                    <p>EDI（Electronic Data Interchange）とは、企業間で電子的にデータを交換する仕組みのことです。EDIは、取引の効率化やコスト削減を実現します。</p>
                    <h3>特徴</h3>
                    <ul>
                        <li>電子取引：EDIは電子的にデータを交換します。</li>
                        <li>効率化：EDIは取引の効率化を図ります。</li>
                        <li>コスト削減：EDIは取引コストを削減します。</li>
                    </ul>
                `
    },
    {
        id: 'slide36',
        title: 'E-R図(Entity-Relationship Diagram)',
        content: `
                    <p>E-R図（Entity-Relationship Diagram）とは、データベースの設計を視覚的に表現する図のことです。E-R図は、データの構造や関係を理解するために使用されます。</p>
                    <h3>特徴</h3>
                    <ul>
                        <li>視覚化：E-R図はデータベースの構造を視覚化します。</li>
                        <li>関係表現：E-R図はデータの関係を表現します。</li>
                        <li>設計支援：E-R図はデータベース設計を支援します。</li>
                    </ul>
                `
    },
    {
        id: 'slide37',
        title: 'eKYC(Electronic Know Your Customer)',
        content: `
                    <p>eKYC（Electronic Know Your Customer）とは、電子的に顧客の本人確認を行う仕組みのことです。eKYCは、金融機関やオンラインサービスで広く使用されています。</p>
                    <h3>特徴</h3>
                    <ul>
                        <li>電子本人確認：eKYCは電子的に本人確認を行います。</li>
                        <li>効率化：eKYCは本人確認の効率化を図ります。</li>
                        <li>セキュリティ：eKYCはセキュリティを強化します。</li>
                    </ul>
                `
    },
    {
        id: 'slide38',
        title: 'ERP(Enterprise Resource Planning)',
        content: `
                    <p>ERP（Enterprise Resource Planning）とは、企業の資源を統合的に管理するシステムのことです。ERPは、業務の効率化や情報の一元管理を実現します。</p>
                    <h3>特徴</h3>
                    <ul>
                        <li>統合管理：ERPは企業の資源を統合的に管理します。</li>
                        <li>効率化：ERPは業務の効率化を図ります。</li>
                        <li>情報一元化：ERPは情報の一元管理を実現します。</li>
                    </ul>
                `
    },
    {
        id: 'slide39',
        title: 'ESG投資(Environmental, Social, and Governance Investment)',
        content: `
                    <p>ESG投資（Environmental, Social, and Governance Investment）とは、環境、社会、ガバナンスの要素を考慮して行う投資のことです。ESG投資は、持続可能な社会の実現を目指します。</p>
                    <h3>特徴</h3>
                    <ul>
                        <li>環境配慮：ESG投資は環境への配慮を重視します。</li>
                        <li>社会貢献：ESG投資は社会貢献を重視します。</li>
                        <li>ガバナンス：ESG投資は企業のガバナンスを重視します。</li>
                    </ul>
                `
    },
    {
        id: 'slide40',
        title: 'FAQ(Frequently Asked Questions)',
        content: `
                    <p>FAQ（Frequently Asked Questions）とは、よくある質問とその回答をまとめたものです。FAQは、ユーザーの疑問を解消し、サポート業務の効率化を図ります。</p>
                    <h3>特徴</h3>
                    <ul>
                        <li>疑問解消：FAQはユーザーの疑問を解消します。</li>
                        <li>効率化：FAQはサポート業務の効率化を図ります。</li>
                        <li>アクセス容易：FAQはユーザーが容易にアクセスできる形式で提供されます。</li>
                    </ul>
                `
    },
    {
        id: 'slide41',
        title: 'FTTH(Fiber To The Home)',
        content: `
                    <p>FTTH（Fiber To The Home）とは、光ファイバーを家庭まで引き込むインターネット接続方式のことです。FTTHは、高速で安定したインターネット接続を提供します。</p>
                    <h3>特徴</h3>
                    <ul>
                        <li>高速接続：FTTHは高速なインターネット接続を提供します。</li>
                        <li>安定性：FTTHは安定した接続を提供します。</li>
                        <li>広帯域：FTTHは広帯域のデータ通信を可能にします。</li>
                    </ul>
                `
    },
    {
        id: 'slide42',
        title: 'GPS(Global Positioning System)',
        content: `
                    <p>GPS（Global Positioning System）とは、人工衛星を利用して地球上の位置を測定するシステムのことです。GPSは、ナビゲーションや位置情報サービスに広く使用されています。</p>
                    <h3>特徴</h3>
                    <ul>
                        <li>高精度：GPSは高精度な位置測定を行います。</li>
                        <li>グローバル：GPSは地球上のどこでも利用可能です。</li>
                        <li>多様な応用：GPSはナビゲーションや位置情報サービスに応用されています。</li>
                    </ul>
                `
    },
    {
        id: 'slide43',
        title: 'GUI(Graphical User Interface)',
        content: `
                    <p>GUI（Graphical User Interface）とは、グラフィカルな要素を用いてユーザーとコンピュータが対話するインターフェースのことです。GUIは、視覚的に直感的な操作を可能にします。</p>
                    <h3>特徴</h3>
                    <ul>
                        <li>視覚的：GUIは視覚的な要素を用います。</li>
                        <li>直感的操作：GUIは直感的な操作を可能にします。</li>
                        <li>ユーザーフレンドリー：GUIはユーザーにとって使いやすいインターフェースです。</li>
                    </ul>
                `
    },
    // ...existing slides...
    {
        id: 'slide44',
        title: 'GPU(Graphics Processing Unit)',
        content: `
                        <p>GPU（Graphics Processing Unit）とは、画像処理を専門に行うプロセッサのことです。GPUは、グラフィックスのレンダリングや並列計算に優れています。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>高速処理：GPUは画像処理を高速に行います。</li>
                            <li>並列計算：GPUは並列計算に優れています。</li>
                            <li>多用途：GPUはゲーム、科学計算、機械学習などに使用されます。</li>
                        </ul>
                    `
    },
    {
        id: 'slide45',
        title: 'HCD(Human-Centered Design)',
        content: `
                        <p>HCD（Human-Centered Design）とは、人間中心設計のことです。HCDは、ユーザーのニーズや行動を理解し、それに基づいて製品やサービスを設計するアプローチです。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>ユーザー中心：HCDはユーザーのニーズを重視します。</li>
                            <li>インタラクション：HCDはユーザーとのインタラクションを重視します。</li>
                            <li>反復設計：HCDは反復的な設計プロセスを採用します。</li>
                        </ul>
                    `
    },
    {
        id: 'slide46',
        title: 'HDMI(High-Definition Multimedia Interface)',
        content: `
                        <p>HDMI（High-Definition Multimedia Interface）とは、高解像度の映像と音声をデジタルで伝送するインターフェースのことです。HDMIは、テレビ、モニター、プロジェクターなどで広く使用されています。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>高解像度：HDMIは高解像度の映像を伝送します。</li>
                            <li>デジタル音声：HDMIはデジタル音声を伝送します。</li>
                            <li>多用途：HDMIはさまざまなデバイスで使用されます。</li>
                        </ul>
                    `
    },
    {
        id: 'slide47',
        title: 'HEMS(Home Energy Management System)',
        content: `
                        <p>HEMS（Home Energy Management System）とは、家庭のエネルギー消費を管理するシステムのことです。HEMSは、エネルギーの使用状況を監視し、効率的なエネルギー管理を実現します。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>エネルギー監視：HEMSはエネルギーの使用状況を監視します。</li>
                            <li>効率化：HEMSはエネルギーの効率的な使用を促進します。</li>
                            <li>コスト削減：HEMSはエネルギーコストの削減に寄与します。</li>
                        </ul>
                    `
    },
    {
        id: 'slide48',
        title: 'HRT(Human Resource Technology)',
        content: `
                        <p>HRT（Human Resource Technology）とは、人事管理における技術のことです。HRTは、採用、評価、教育などの人事業務を効率化します。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>効率化：HRTは人事業務を効率化します。</li>
                            <li>データ活用：HRTはデータを活用して人事管理を行います。</li>
                            <li>柔軟性：HRTは柔軟な人事管理を可能にします。</li>
                        </ul>
                    `
    },
    {
        id: 'slide49',
        title: 'HRM(Human Resource Management)',
        content: `
                        <p>HRM（Human Resource Management）とは、人材管理のことです。HRMは、従業員の採用、評価、教育、報酬などを管理します。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>採用管理：HRMは従業員の採用を管理します。</li>
                            <li>評価管理：HRMは従業員の評価を管理します。</li>
                            <li>教育管理：HRMは従業員の教育を管理します。</li>
                        </ul>
                    `
    },
    {
        id: 'slide50',
        title: 'HTML(HyperText Markup Language)',
        content: `
                        <p>HTML（HyperText Markup Language）とは、ウェブページを作成するためのマークアップ言語のことです。HTMLは、ウェブページの構造を定義し、ブラウザで表示される内容を記述します。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>構造定義：HTMLはウェブページの構造を定義します。</li>
                            <li>タグ：HTMLはタグを使用して内容を記述します。</li>
                            <li>互換性：HTMLは多くのブラウザでサポートされています。</li>
                        </ul>
                    `
    },
    {
        id: 'slide51',
        title: 'HTTP(HyperText Transfer Protocol)',
        content: `
                        <p>HTTP（HyperText Transfer Protocol）とは、ウェブブラウザとウェブサーバ間でデータを送受信するためのプロトコルのことです。HTTPは、ウェブページの表示やデータの送受信に使用されます。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>データ送受信：HTTPはデータの送受信を行います。</li>
                            <li>ステートレス：HTTPはステートレスなプロトコルです。</li>
                            <li>広範な使用：HTTPはウェブ上で広く使用されています。</li>
                        </ul>
                    `
    },
    {
        id: 'slide52',
        title: 'ICT(Information and Communication Technology)',
        content: `
                        <p>ICT（Information and Communication Technology）とは、情報通信技術のことです。ICTは、情報の収集、処理、伝達を行う技術を指し、さまざまな分野で応用されています。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>情報収集：ICTは情報の収集を行います。</li>
                            <li>情報処理：ICTは情報の処理を行います。</li>
                            <li>情報伝達：ICTは情報の伝達を行います。</li>
                        </ul>
                    `
    },
    {
        id: 'slide53',
        title: 'IEC(International Electrotechnical Commission)',
        content: `
                        <p>IEC（International Electrotechnical Commission）とは、国際電気標準会議のことです。IECは、電気技術に関する国際標準を策定する機関です。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>国際標準：IECは電気技術に関する国際標準を策定します。</li>
                            <li>広範な分野：IECは広範な電気技術分野をカバーします。</li>
                            <li>国際協力：IECは国際的な協力を促進します。</li>
                        </ul>
                    `
    },
    {
        id: 'slide54',
        title: 'IEEE(Institute of Electrical and Electronics Engineers)',
        content: `
                        <p>IEEE（Institute of Electrical and Electronics Engineers）とは、電気電子技術者協会のことです。IEEEは、電気電子技術に関する標準の策定や技術の普及を行う団体です。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>技術標準：IEEEは電気電子技術に関する標準を策定します。</li>
                            <li>技術普及：IEEEは技術の普及を促進します。</li>
                            <li>専門家ネットワーク：IEEEは専門家のネットワークを提供します。</li>
                        </ul>
                    `
    },
    {
        id: 'slide55',
        title: 'IDS(Intrusion Detection System)',
        content: `
                        <p>IDS（Intrusion Detection System）とは、ネットワークやシステムへの不正侵入を検知するシステムのことです。IDSは、セキュリティインシデントの早期発見と対応を支援します。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>不正検知：IDSは不正侵入を検知します。</li>
                            <li>リアルタイム監視：IDSはリアルタイムでネットワークやシステムを監視します。</li>
                            <li>アラート：IDSは不正を検知するとアラートを発します。</li>
                        </ul>
                    `
    },
    {
        id: 'slide56',
        title: 'IMAP(Internet Message Access Protocol)',
        content: `
                        <p>IMAP（Internet Message Access Protocol）とは、電子メールをサーバ上で管理し、クライアントからアクセスするためのプロトコルのことです。IMAPは、複数のデバイスからメールを管理するのに適しています。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>サーバ管理：IMAPはメールをサーバ上で管理します。</li>
                            <li>複数デバイス：IMAPは複数のデバイスからメールを管理できます。</li>
                            <li>同期：IMAPはメールの同期をサポートします。</li>
                        </ul>
                    `
    },
    {
        id: 'slide57',
        title: 'IoT(Internet of Things)',
        content: `
                        <p>IoT（Internet of Things）とは、インターネットに接続された物理的なデバイスやセンサーが相互に通信し、データを交換する仕組みのことです。IoTは、スマートホーム、産業オートメーション、ヘルスケアなどで広く応用されています。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>相互通信：IoTデバイスは相互に通信します。</li>
                            <li>データ交換：IoTはデバイス間でデータを交換します。</li>
                            <li>多様な応用：IoTはさまざまな分野で応用されています。</li>
                        </ul>
                    `
    },
    {
        id: 'slide58',
        title: 'IPO(Initial Public Offering)',
        content: `
                        <p>IPO（Initial Public Offering）とは、企業が初めて株式を公開し、一般投資家に販売することです。IPOは、企業が資金を調達し、成長を加速させるための手段です。</p>
                        <h3>特徴</h3>
                        <ul>
                            <li>資金調達：IPOは企業が資金を調達する手段です。</li>
                            <li>成長加速：IPOは企業の成長を加速させます。</li>
                            <li>市場公開：IPOは企業の株式を市場に公開します。</li>
                        </ul>
                    `
    },
    {
        id: 'slide59',
        title: 'IPアドレス',
        content: `
                            <p>IPアドレスとは、インターネット上でデバイスを識別するための一意の番号のことです。IPアドレスは、ネットワーク通信において重要な役割を果たします。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>一意性：IPアドレスは一意の番号です。</li>
                                <li>識別：IPアドレスはデバイスを識別します。</li>
                                <li>通信：IPアドレスはネットワーク通信に使用されます。</li>
                            </ul>
                        `
    },
    {
        id: 'slide60',
        title: 'IrDA',
        content: `
                            <p>IrDA（Infrared Data Association）とは、赤外線を使用してデータを通信するための規格のことです。IrDAは、短距離でのデータ通信に使用されます。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>短距離通信：IrDAは短距離での通信に適しています。</li>
                                <li>赤外線：IrDAは赤外線を使用します。</li>
                                <li>データ通信：IrDAはデータ通信に使用されます。</li>
                            </ul>
                        `
    },
    {
        id: 'slide61',
        title: 'ISMS',
        content: `
                            <p>ISMS（Information Security Management System）とは、情報セキュリティを管理するためのシステムのことです。ISMSは、情報の機密性、完全性、可用性を確保するための枠組みを提供します。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>機密性：ISMSは情報の機密性を確保します。</li>
                                <li>完全性：ISMSは情報の完全性を確保します。</li>
                                <li>可用性：ISMSは情報の可用性を確保します。</li>
                            </ul>
                        `
    },
    {
        id: 'slide62',
        title: 'ISO',
        content: `
                            <p>ISO（International Organization for Standardization）とは、国際標準化機構のことです。ISOは、さまざまな分野で国際標準を策定し、普及を図ります。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>国際標準：ISOは国際標準を策定します。</li>
                                <li>広範な分野：ISOは広範な分野をカバーします。</li>
                                <li>普及：ISOは標準の普及を図ります。</li>
                            </ul>
                        `
    },
    {
        id: 'slide63',
        title: 'ISP',
        content: `
                            <p>ISP（Internet Service Provider）とは、インターネット接続サービスを提供する事業者のことです。ISPは、個人や企業にインターネット接続を提供します。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>接続サービス：ISPはインターネット接続サービスを提供します。</li>
                                <li>多様なプラン：ISPは多様な接続プランを提供します。</li>
                                <li>サポート：ISPは技術サポートを提供します。</li>
                            </ul>
                        `
    },
    {
        id: 'slide64',
        title: 'IVR',
        content: `
                            <p>IVR（Interactive Voice Response）とは、音声応答システムのことです。IVRは、電話を通じて自動的に音声案内を行い、ユーザーの入力に応じて対応します。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>自動応答：IVRは自動的に音声案内を行います。</li>
                                <li>ユーザー入力：IVRはユーザーの入力に応じて対応します。</li>
                                <li>効率化：IVRは電話応対業務を効率化します。</li>
                            </ul>
                        `
    },
    {
        id: 'slide65',
        title: 'JANコード',
        content: `
                            <p>JANコード（Japanese Article Number）とは、日本で使用される商品識別コードのことです。JANコードは、商品管理や流通において重要な役割を果たします。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>識別コード：JANコードは商品を識別します。</li>
                                <li>商品管理：JANコードは商品管理に使用されます。</li>
                                <li>流通：JANコードは流通において重要です。</li>
                            </ul>
                        `
    },
    {
        id: 'slide66',
        title: 'JIS',
        content: `
                            <p>JIS（Japanese Industrial Standards）とは、日本の工業標準規格のことです。JISは、製品やサービスの品質を確保するための基準を提供します。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>工業標準：JISは工業標準規格です。</li>
                                <li>品質確保：JISは製品やサービスの品質を確保します。</li>
                                <li>基準提供：JISは基準を提供します。</li>
                            </ul>
                        `
    },
    {
        id: 'slide67',
        title: 'JIT',
        content: `
                            <p>JIT（Just In Time）とは、必要なものを必要なときに必要な量だけ生産する生産方式のことです。JITは、在庫削減や生産効率の向上を目指します。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>在庫削減：JITは在庫を削減します。</li>
                                <li>効率向上：JITは生産効率を向上させます。</li>
                                <li>タイムリー：JITはタイムリーな生産を実現します。</li>
                            </ul>
                        `
    },
    {
        id: 'slide68',
        title: 'KGI',
        content: `
                            <p>KGI（Key Goal Indicator）とは、重要目標達成指標のことです。KGIは、企業の目標達成度を測定するための指標です。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>目標達成：KGIは目標達成度を測定します。</li>
                                <li>指標：KGIは指標として使用されます。</li>
                                <li>企業目標：KGIは企業の目標達成を支援します。</li>
                            </ul>
                        `
    },
    {
        id: 'slide69',
        title: 'KPI',
        content: `
                            <p>KPI（Key Performance Indicator）とは、重要業績評価指標のことです。KPIは、企業の業績を評価するための指標です。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>業績評価：KPIは業績を評価します。</li>
                                <li>指標：KPIは指標として使用されます。</li>
                                <li>パフォーマンス：KPIは企業のパフォーマンスを測定します。</li>
                            </ul>
                        `
    },
    {
        id: 'slide70',
        title: 'LAN',
        content: `
                            <p>LAN（Local Area Network）とは、限定された範囲内で構築されるネットワークのことです。LANは、企業や家庭内でのデバイス間の通信に使用されます。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>限定範囲：LANは限定された範囲内で構築されます。</li>
                                <li>デバイス間通信：LANはデバイス間の通信に使用されます。</li>
                                <li>高速通信：LANは高速な通信を提供します。</li>
                            </ul>
                        `
    },
    {
        id: 'slide71',
        title: 'LED',
        content: `
                            <p>LED（Light Emitting Diode）とは、光を発する半導体素子のことです。LEDは、照明やディスプレイなどに広く使用されています。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>省エネ：LEDは省エネルギーです。</li>
                                <li>長寿命：LEDは長寿命です。</li>
                                <li>多用途：LEDは照明やディスプレイなどに使用されます。</li>
                            </ul>
                        `
    },
    {
        id: 'slide72',
        title: 'LPWA',
        content: `
                            <p>LPWA（Low Power Wide Area）とは、低消費電力で広範囲の通信を行う技術のことです。LPWAは、IoTデバイスの通信に適しています。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>低消費電力：LPWAは低消費電力で通信を行います。</li>
                                <li>広範囲通信：LPWAは広範囲での通信に適しています。</li>
                                <li>IoT適用：LPWAはIoTデバイスの通信に適しています。</li>
                            </ul>
                        `
    },
    {
        id: 'slide73',
        title: 'MACアドレス',
        content: `
                            <p>MACアドレスとは、ネットワークインターフェースカードに割り当てられる一意の識別子のことです。MACアドレスは、デバイス間の通信に使用されます。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>一意性：MACアドレスは一意の識別子です。</li>
                                <li>識別：MACアドレスはデバイスを識別します。</li>
                                <li>通信：MACアドレスはデバイス間の通信に使用されます。</li>
                            </ul>
                        `
    },
    {
        id: 'slide74',
        title: 'M&A',
        content: `
                            <p>M&A（Mergers and Acquisitions）とは、企業の合併や買収のことです。M&Aは、企業の成長や市場拡大を目的として行われます。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>合併：M&Aは企業の合併を指します。</li>
                                <li>買収：M&Aは企業の買収を指します。</li>
                                <li>成長：M&Aは企業の成長を促進します。</li>
                            </ul>
                        `
    },
    {
        id: 'slide75',
        title: 'MBO',
        content: `
                            <p>MBO（Management Buyout）とは、経営陣が自社の株式を買い取ることです。MBOは、経営の独立性を確保するために行われます。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>経営陣買収：MBOは経営陣が自社の株式を買い取ります。</li>
                                <li>独立性：MBOは経営の独立性を確保します。</li>
                                <li>経営権：MBOは経営権を確保します。</li>
                            </ul>
                        `
    },
    {
        id: 'slide76',
        title: 'MDM',
        content: `
                            <p>MDM（Mobile Device Management）とは、モバイルデバイスを管理するためのシステムのことです。MDMは、デバイスのセキュリティや設定を一元管理します。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>セキュリティ：MDMはデバイスのセキュリティを管理します。</li>
                                <li>設定管理：MDMはデバイスの設定を一元管理します。</li>
                                <li>リモート管理：MDMはリモートでデバイスを管理します。</li>
                            </ul>
                        `
    },
    {
        id: 'slide77',
        title: 'MIME',
        content: `
                            <p>MIME（Multipurpose Internet Mail Extensions）とは、電子メールでさまざまな形式のデータを送受信するための規格のことです。MIMEは、テキスト、画像、音声などのデータを扱います。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>多用途：MIMEはさまざまな形式のデータを扱います。</li>
                                <li>電子メール：MIMEは電子メールで使用されます。</li>
                                <li>データ送受信：MIMEはデータの送受信をサポートします。</li>
                            </ul>
                        `
    },
    {
        id: 'slide78',
        title: 'MR',
        content: `
                            <p>MR（Mixed Reality）とは、現実世界と仮想世界を融合させる技術のことです。MRは、教育、エンターテインメント、医療などで応用されています。</p>
                            <h3>特徴</h3>
                            <ul>
                                <li>現実と仮想の融合：MRは現実世界と仮想世界を融合させます。</li>
                                <li>インタラクティブ：MRはユーザーとのインタラクションを可能にします。</li>
                                <li>多様な応用：MRは教育、エンターテインメント、医療などで応用されています。</li>
                            </ul>
                        `
    },

    {
        id: 'slide79',
        title: 'MVNO',
        content: `
                                <p>MVNO（Mobile Virtual Network Operator）とは、他社の通信インフラを借りて移動体通信サービスを提供する事業者のことです。MVNOは、独自のサービスや料金プランを提供します。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>インフラ借用：MVNOは他社の通信インフラを借用します。</li>
                                    <li>独自サービス：MVNOは独自のサービスや料金プランを提供します。</li>
                                    <li>競争促進：MVNOは市場競争を促進します。</li>
                                </ul>
                            `
    },
    {
        id: 'slide80',
        title: 'NAT',
        content: `
                                <p>NAT（Network Address Translation）とは、ネットワークアドレス変換のことです。NATは、プライベートIPアドレスをパブリックIPアドレスに変換し、インターネット接続を可能にします。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>アドレス変換：NATはプライベートIPアドレスをパブリックIPアドレスに変換します。</li>
                                    <li>セキュリティ向上：NATはネットワークのセキュリティを向上させます。</li>
                                    <li>アドレス節約：NATはIPアドレスの節約に寄与します。</li>
                                </ul>
                            `
    },
    {
        id: 'slide81',
        title: 'NAS',
        content: `
                                <p>NAS（Network Attached Storage）とは、ネットワークに接続されたストレージデバイスのことです。NASは、複数のデバイスからデータを共有・管理するために使用されます。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>データ共有：NASは複数のデバイスからデータを共有します。</li>
                                    <li>管理容易：NASはデータの管理が容易です。</li>
                                    <li>拡張性：NASはストレージ容量の拡張が可能です。</li>
                                </ul>
                            `
    },
    {
        id: 'slide82',
        title: 'NDS',
        content: `
                                <p>NDS（Network Directory Service）とは、ネットワーク上のリソースを管理するためのディレクトリサービスのことです。NDSは、ユーザー認証やリソース管理を行います。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>ユーザー認証：NDSはユーザー認証を行います。</li>
                                    <li>リソース管理：NDSはネットワークリソースを管理します。</li>
                                    <li>集中管理：NDSはリソースの集中管理を可能にします。</li>
                                </ul>
                            `
    },
    {
        id: 'slide83',
        title: 'NFC',
        content: `
                                <p>NFC（Near Field Communication）とは、近距離無線通信技術のことです。NFCは、スマートフォンやICカードなどで使用され、データのやり取りや決済に利用されます。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>近距離通信：NFCは近距離での通信に適しています。</li>
                                    <li>高速通信：NFCは高速なデータ通信が可能です。</li>
                                    <li>多用途：NFCは決済やデータ交換などに使用されます。</li>
                                </ul>
                            `
    },
    {
        id: 'slide84',
        title: 'OJT',
        content: `
                                <p>OJT（On-the-Job Training）とは、職場で実際の業務を通じて行う訓練のことです。OJTは、実務経験を積みながらスキルを習得する方法です。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>実務経験：OJTは実務経験を通じてスキルを習得します。</li>
                                    <li>即戦力：OJTは即戦力となる人材を育成します。</li>
                                    <li>現場指導：OJTは現場での指導が行われます。</li>
                                </ul>
                            `
    },
    {
        id: 'slide85',
        title: 'OEM',
        content: `
                                <p>OEM（Original Equipment Manufacturer）とは、他社ブランドの製品を製造することです。OEMは、製造業者が他社のブランド名で製品を提供します。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>ブランド提供：OEMは他社のブランド名で製品を提供します。</li>
                                    <li>製造委託：OEMは製造を他社に委託します。</li>
                                    <li>コスト削減：OEMは製造コストの削減に寄与します。</li>
                                </ul>
                            `
    },
    {
        id: 'slide86',
        title: 'Off-JT',
        content: `
                                <p>Off-JT（Off-the-Job Training）とは、職場外で行う訓練のことです。Off-JTは、セミナーや研修などを通じてスキルを習得する方法です。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>職場外訓練：Off-JTは職場外で行われます。</li>
                                    <li>専門知識：Off-JTは専門知識を習得します。</li>
                                    <li>計画的：Off-JTは計画的に実施されます。</li>
                                </ul>
                            `
    },
    {
        id: 'slide87',
        title: 'OS',
        content: `
                                <p>OS（Operating System）とは、コンピュータの基本ソフトウェアのことです。OSは、ハードウェアとソフトウェアの間で動作を管理し、ユーザーがコンピュータを操作するための環境を提供します。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>基本ソフトウェア：OSはコンピュータの基本ソフトウェアです。</li>
                                    <li>リソース管理：OSはハードウェアリソースを管理します。</li>
                                    <li>ユーザーインターフェース：OSはユーザーインターフェースを提供します。</li>
                                </ul>
                            `
    },
    {
        id: 'slide88',
        title: 'OSS',
        content: `
                                <p>OSS（Open Source Software）とは、ソースコードが公開されているソフトウェアのことです。OSSは、誰でも自由に使用、改良、再配布することができます。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>ソースコード公開：OSSはソースコードが公開されています。</li>
                                    <li>自由利用：OSSは自由に使用、改良、再配布が可能です。</li>
                                    <li>コミュニティ：OSSはコミュニティによって開発・維持されます。</li>
                                </ul>
                            `
    },
    {
        id: 'slide89',
        title: 'PDF',
        content: `
                                <p>PDF（Portable Document Format）とは、電子文書の形式の一つです。PDFは、異なる環境でも同じレイアウトで表示できる特徴があります。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>互換性：PDFは異なる環境でも同じレイアウトで表示されます。</li>
                                    <li>固定レイアウト：PDFはレイアウトが固定されています。</li>
                                    <li>多用途：PDFは文書、画像、フォームなどに使用されます。</li>
                                </ul>
                            `
    },
    {
        id: 'slide90',
        title: 'PEST分析',
        content: `
                                <p>PEST分析とは、政治（Political）、経済（Economic）、社会（Social）、技術（Technological）の観点から外部環境を分析する手法のことです。PEST分析は、企業の戦略立案に役立ちます。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>外部環境分析：PEST分析は外部環境を分析します。</li>
                                    <li>戦略立案：PEST分析は企業の戦略立案に役立ちます。</li>
                                    <li>多角的視点：PEST分析は多角的な視点で環境を評価します。</li>
                                </ul>
                            `
    },
    {
        id: 'slide91',
        title: 'PL法',
        content: `
                                <p>PL法（Product Liability Law）とは、製造物責任法のことです。PL法は、製品の欠陥によって生じた損害について、製造者が責任を負うことを定めています。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>製造物責任：PL法は製造物責任を定めています。</li>
                                    <li>消費者保護：PL法は消費者を保護します。</li>
                                    <li>損害賠償：PL法は損害賠償の基準を提供します。</li>
                                </ul>
                            `
    },
    {
        id: 'slide92',
        title: 'PMBOK',
        content: `
                                <p>PMBOK（Project Management Body of Knowledge）とは、プロジェクトマネジメントの知識体系のことです。PMBOKは、プロジェクトマネジメントのベストプラクティスをまとめたガイドです。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>知識体系：PMBOKはプロジェクトマネジメントの知識体系です。</li>
                                    <li>ベストプラクティス：PMBOKはベストプラクティスを提供します。</li>
                                    <li>ガイド：PMBOKはプロジェクトマネジメントのガイドです。</li>
                                </ul>
                            `
    },
    {
        id: 'slide93',
        title: 'PoC',
        content: `
                                <p>PoC（Proof of Concept）とは、概念実証のことです。PoCは、新しいアイデアや技術の実現可能性を検証するためのプロセスです。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>実現可能性：PoCはアイデアや技術の実現可能性を検証します。</li>
                                    <li>リスク低減：PoCはリスクを低減します。</li>
                                    <li>早期評価：PoCは早期に評価を行います。</li>
                                </ul>
                            `
    },
    {
        id: 'slide94',
        title: 'POP',
        content: `
                                <p>POP（Point of Purchase）とは、購買時点のことです。POPは、消費者が商品を購入する際の販売促進活動を指します。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>購買時点：POPは消費者が商品を購入する時点です。</li>
                                    <li>販売促進：POPは販売促進活動を指します。</li>
                                    <li>消費者誘導：POPは消費者を購買に誘導します。</li>
                                </ul>
                            `
    },
    {
        id: 'slide95',
        title: 'PPM',
        content: `
                                <p>PPM（Project Portfolio Management）とは、プロジェクトポートフォリオマネジメントのことです。PPMは、複数のプロジェクトを統合的に管理し、最適な資源配分を行います。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>統合管理：PPMは複数のプロジェクトを統合的に管理します。</li>
                                    <li>資源配分：PPMは最適な資源配分を行います。</li>
                                    <li>戦略的整合：PPMはプロジェクトを戦略的に整合させます。</li>
                                </ul>
                            `
    },
    {
        id: 'slide96',
        title: 'QCD',
        content: `
                                <p>QCD（Quality, Cost, Delivery）とは、品質、コスト、納期のことです。QCDは、製造業における重要な管理指標です。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>品質：QCDは品質を重視します。</li>
                                    <li>コスト：QCDはコストを管理します。</li>
                                    <li>納期：QCDは納期を守ります。</li>
                                </ul>
                            `
    },
    {
        id: 'slide97',
        title: 'QRコード',
        content: `
                                <p>QRコードとは、二次元バーコードの一種で、情報を格納するためのコードのことです。QRコードは、スマートフォンなどで読み取ることができます。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>高密度：QRコードは高密度に情報を格納します。</li>
                                    <li>高速読み取り：QRコードは高速に読み取ることができます。</li>
                                    <li>多用途：QRコードはさまざまな用途に使用されます。</li>
                                </ul>
                            `
    },
    {
        id: 'slide98',
        title: 'RAM',
        content: `
                                <p>RAM（Random Access Memory）とは、コンピュータの主記憶装置の一種で、データを一時的に保存するためのメモリのことです。RAMは、高速な読み書きが可能です。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>高速：RAMは高速な読み書きが可能です。</li>
                                    <li>揮発性：RAMは電源を切るとデータが消失します。</li>
                                    <li>一時保存：RAMはデータを一時的に保存します。</li>
                                </ul>
                            `
    },
    {
        id: 'slide99',
        title: 'RDBMS',
        content: `
                                <p>RDBMS（Relational Database Management System）とは、リレーショナルデータベース管理システムのことです。RDBMSは、データを表形式で管理し、SQLを使用して操作します。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>表形式：RDBMSはデータを表形式で管理します。</li>
                                    <li>SQL使用：RDBMSはSQLを使用してデータを操作します。</li>
                                    <li>データ整合性：RDBMSはデータの整合性を確保します。</li>
                                </ul>
                            `
    },
    {
        id: 'slide100',
        title: 'RFID',
        content: `
                                <p>RFID（Radio Frequency Identification）とは、無線周波数を使用して情報を読み取る技術のことです。RFIDは、物流や在庫管理などで広く使用されています。</p>
                                <h3>特徴</h3>
                                <ul>
                                    <li>無線通信：RFIDは無線通信を使用します。</li>
                                    <li>非接触：RFIDは非接触で情報を読み取ります。</li>
                                    <li>多用途：RFIDは物流や在庫管理などに使用されます。</li>
                                </ul>
                            `
    },
];
