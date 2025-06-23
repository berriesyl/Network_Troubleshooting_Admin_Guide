
import { useState } from 'react';
import { ChevronDown, ChevronRight, Network, Shield, Server, AlertTriangle } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem = ({ title, children, defaultOpen = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors flex items-center justify-between group"
      >
        <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
          {title}
        </h2>
        {isOpen ? (
          <ChevronDown className="w-6 h-6 text-blue-600 transform transition-transform duration-200" />
        ) : (
          <ChevronRight className="w-6 h-6 text-gray-400 transform transition-transform duration-200" />
        )}
      </button>
      <div className={`transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-none opacity-100 overflow-visible' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-6 py-4 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

interface StepItemProps {
  title: string;
  children: React.ReactNode;
  image?: string;
}

const StepItem = ({ title, children, image }: StepItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-l-4 border-blue-500 pl-4 mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left mb-2 hover:bg-gray-50 p-2 rounded transition-colors flex items-center gap-2"
      >
        {isOpen ? (
          <ChevronDown className="w-4 h-4 text-blue-500 flex-shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
        )}
        <h4 className="font-semibold text-gray-800">{title}</h4>
      </button>
      <div className={`transition-all duration-200 ease-in-out ${
        isOpen ? 'max-h-none opacity-100 overflow-visible' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="ml-6 text-gray-700 leading-relaxed">
          {children}
          {image && (
            <div className="mt-4">
              <img src={image} alt={title} className="max-w-full h-auto rounded-lg shadow-sm border" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-600 rounded-lg">
              <Network className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Network Troubleshooting Admin Guide</h1>
              <p className="text-xl text-gray-600 mt-2">Computer Networks Course Project</p>
            </div>
          </div>
          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-blue-800 font-medium">Author: Berra SÖYLER</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
          </div>
          <div className="prose prose-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              IT professionals working in system and network administration often face a variety of technical challenges in their daily operations. These issues may stem from configuration errors or infrastructure shortcomings, and resolving them can often be time-consuming and complex.
            </p>
            <p className="mb-4">
              This report is intended to offer practical solutions to some of the common problems encountered in the field. While it does not aim to be a comprehensive documentation, it is designed to serve as a helpful guide for professionals who may be facing similar situations.
            </p>
            <p>
              The main goal of this work is to provide clear and applicable solutions to challenges commonly encountered in system and network administration.
            </p>
          </div>
        </div>

        {/* Issues */}
        <div className="space-y-6">
          {/* Issue 1 */}
          <AccordionItem title="Issue 1: Insecure SSH Hardening">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-800">Application Layer (Layer 7)</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Problem Description</h3>
                <p className="text-gray-700">
                  The default SSH configuration leaves the system vulnerable to several security risks, including brute-force attacks, unauthorized root access, and broad user access. Without proper hardening, attackers can exploit weak credentials, default settings, or open ports to gain unauthorized access to the server. This misconfiguration at the Application Layer (Layer 7) poses a serious threat to system integrity and confidentiality.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Resolution Steps
                </h3>
                
                <StepItem title="Step 1: Open the SSH Configuration File">
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">sudo nano /etc/ssh/sshd_config</pre>
                </StepItem>

                <StepItem title="Step 2: Modify or Add the Following Lines">
                  <p className="mb-3">Make sure these lines are uncommented and correctly set (default settings are commented to show on screenshot):</p>
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto mb-3">{`PermitRootLogin no
PasswordAuthentication no
Port 2222
LoginGraceTime 30
MaxAuthTries 3`}</pre>
                  <img src="/images/1-baslik-steps2-foto1.png" alt="SSH ayarları görsel 1" className="mb-4 rounded shadow" />
                  <img src="/images/1-baslik-steps2-foto2.png" alt="SSH ayarları görsel 1" className="mb-4 rounded shadow" />
                </StepItem>

                <StepItem title="Step 3: Restart the SSH Service">
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">sudo systemctl restart ssh</pre>
                </StepItem>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-3">💡 Explanation of Changes</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li><strong>PermitRootLogin no</strong> - Disables direct root login, reducing privilege escalation risks.</li>
                    <li><strong>PasswordAuthentication no</strong> - Enforces key-based authentication, making brute-force attempts ineffective.</li>
                    <li><strong>Port 2222</strong> - Changes the SSH port from the default 22 to a non-standard port for basic stealth (security through obscurity).</li>
                    <li><strong>LoginGraceTime 30</strong> - Limits the time allowed to successfully log in before the connection is dropped.</li>
                    <li><strong>MaxAuthTries 3</strong> - Restricts the number of authentication attempts, mitigating brute-force login attempts.</li>
                    <li><strong>AllowUsers your_username</strong> - Limits SSH access to specific user(s), reducing the attack surface.</li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionItem>

          {/* Issue 2 */}
          <AccordionItem title="Issue 2: FTP (vsftpd) Hardening">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-800">Application Layer (Layer 7)</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Problem Description</h3>
                <p className="text-gray-700 mb-2">
                  When FTP services run with default configurations, the following vulnerabilities may arise:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>The vsftpd (Very Secure FTP Daemon) may allow anonymous login by default.</li>
                  <li>Once logged in, local users may have unrestricted access to the file system beyond their home directories.</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Resolution Steps
                </h3>
                
                <StepItem title="Step 1: Open the vsftpd configuration file" image="/images/2-baslik-steps1-foto1.png">
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">sudo nano /etc/vsftpd.conf</pre>
                </StepItem>

                <StepItem title="Step 2: Update or add the following settings">
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">{`anonymous_enable=NO
local_enable=YES
write_enable=NO
chroot_local_user=YES
allow_writeable_chroot=NO
user_sub_token=$USER
local_root=/home/$USER/ftp
pasv_enable=YES
pasv_min_port=10000
pasv_max_port=10100`}</pre>
                </StepItem>

                <StepItem title="Step 3: Restart the vsftpd service">
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">sudo systemctl restart vsftpd</pre>
                  <img src="/images/2-baslik-steps3-foto1.png" alt="SSH ayarları görsel 1" className="mb-4 rounded shadow" />
                </StepItem>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-3">Explanation:</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Anonymous access was disabled.</li>
                    <li>• Local users were locked into their home directories.</li>
                    <li>• Passive mode was enabled with a defined port range.</li>
                    <li>• FTP access was secured system-wide.</li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionItem>

          {/* Issue 3 */}
          <AccordionItem title="Issue 3: General Server Hardening">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-800">Application Layer (Layer 7)</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Problem Description</h3>
                <p className="text-gray-700">
                  Servers with default configurations are highly vulnerable to common attack vectors such as brute-force login attempts, unauthorized remote access, and unfiltered network traffic. Without mechanisms like firewall rules or intrusion prevention tools, attackers can exploit open ports, insecure SSH/FTP configurations, or excessive login attempts. These weaknesses expose the server to both automated and targeted threats at the Application Layer (Layer 7) and Network Layer (Layer 3/4).
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Resolution Steps
                </h3>
                
                <StepItem title="Step 1: Install and enable Fail2Ban">
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">sudo apt install fail2ban -y</pre>
                </StepItem>

                <StepItem title="Step 2: Configure Fail2Ban to protect SSH">
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto mb-3">sudo nano /etc/fail2ban/jail.local</pre>
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto mb-3">{`[sshd]
enabled = true
port = 2222
filter = sshd
logpath = /var/log/auth.log
maxretry = 3`}</pre>
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">sudo systemctl restart fail2ban</pre>
                  <img src="/images/3-baslik-steps2-foto1.png" alt="SSH ayarları görsel 1" className="mb-4 rounded shadow" />
                  <img src="/images/3-baslik-steps2-foto2.png" alt="SSH ayarları görsel 1" className="mb-4 rounded shadow" />
                </StepItem>

                <StepItem title="Step 3: Install and configure UFW (Uncomplicated Firewall)" image="/images/3-baslik-steps3-foto1.png">
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">{`sudo apt install ufw -y
sudo ufw allow 2222/tcp
sudo ufw allow 21/tcp
sudo ufw allow 10000:10100/tcp
sudo ufw enable`}</pre>
                </StepItem>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-3">Resolution Summary:</h4>
                  <p className="text-blue-700">
                    SSH and FTP services were hardened. Root login and password-based SSH access were disabled. Anonymous FTP login was blocked, and local users were jailed to their own directories. Fail2Ban and UFW were enabled to provide essential network-level protection. As a result, the server was significantly hardened against common application-layer attacks.
                  </p>

                </div>
              </div>
            </div>
          </AccordionItem>

          {/* Issue 4 */}
          <AccordionItem title="Issue 4: Inter-VLAN Communication Partially Blocked – One-Sided Access">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-800">Network Layer (Layer 3)</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Problem Description</h3>
                <p className="text-gray-700 mb-3">
                  All devices (Laptop0, Laptop1, WebServer) were initially part of VLAN 1, the default VLAN. This meant all devices could ping each other. However, due to updated security policies from the IT department, Laptop0 (Client1) and Laptop1 (Client2) were not supposed to communicate directly. The only allowed shared resource was WebServer.
                </p>
                <p className="text-gray-700 mb-3">
                  The goal was to segment the network using VLANs and allow selective inter-VLAN communication via a router.
                </p>

                <div className="bg-gray-50 border border-gray-300 rounded p-3 mb-3">
                  <h4 className="font-semibold mb-2">Desired Communication Matrix:</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Source</th>
                        <th className="text-left p-2">Destination</th>
                        <th className="text-left p-2">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Laptop0</td>
                        <td className="p-2">WebServer</td>
                        <td className="p-2 text-green-600">Allowed (ping successful)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Laptop1</td>
                        <td className="p-2">WebServer</td>
                        <td className="p-2 text-green-600">Allowed (ping successful)</td>
                      </tr>
                      <tr>
                        <td className="p-2">Laptop0</td>
                        <td className="p-2">Laptop1</td>
                        <td className="p-2 text-red-600">Blocked (ping fails)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Possible Causes:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>All devices in VLAN 1 → flat network, no isolation</li>
                    <li>No VLAN segmentation on the switch</li>
                    <li>Subinterfaces not correctly configured (Router-on-a-Stick issue)</li>
                    <li>Trunk port not configured between Switch and Router</li>
                    <li>IP assigned to physical interface (G0/0) instead of subinterfaces</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  🔧 Troubleshooting & Configuration Steps
                </h3>
                
                <StepItem title="Step 1: Create VLANs on the Switch">
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">{`Switch(config)# vlan 10
Switch(config-vlan)# name Client_VLAN_10
Switch(config)# vlan 20
Switch(config-vlan)# name Client_VLAN_20`}</pre>
                </StepItem>

                <StepItem title="Step 2: Assign Switch Ports to VLANs" image="/images/4-baslik-steps2-foto1.png">
                  <div className="mb-3">
                    <table className="w-full text-sm border border-gray-300 rounded">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left p-2 border-b">Device</th>
                          <th className="text-left p-2 border-b">Switch Port</th>
                          <th className="text-left p-2 border-b">VLAN</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">Laptop0</td>
                          <td className="p-2">Fa0/1</td>
                          <td className="p-2">10</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">Laptop1</td>
                          <td className="p-2">Fa0/2</td>
                          <td className="p-2">20</td>
                        </tr>
                        <tr>
                          <td className="p-2">WebServer</td>
                          <td className="p-2">Fa0/3</td>
                          <td className="p-2">10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">{`Switch(config)# interface fa0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10

Switch(config)# interface fa0/2
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 20

Switch(config)# interface fa0/3
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10`}</pre>
                </StepItem>

                <StepItem title="Step 3: Configure Trunk Between Switch and Router" image="/images/4-baslik-steps3-foto1.png">
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">{`Switch(config)# interface fa0/24
Switch(config-if)# switchport mode trunk`}</pre>
                </StepItem>

                <StepItem title="Step 4: Configure Router Subinterfaces (Router-on-a-Stick)" image="/images/4-baslik-steps4-foto1.png">
                  <p className="mb-3 text-red-600 font-semibold">Critical Fix: Remove IP from physical interface (G0/0), assign to subinterfaces only!</p>
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">{`Router(config)# interface g0/0
Router(config-if)# no ip address

Router(config)# interface g0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0

Router(config)# interface g0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0

Router(config)# interface g0/0
Router(config-if)# no shutdown`}</pre>
                </StepItem>

                <StepItem title="Step 5: Assign IP Settings on End Devices">
                  <table className="w-full text-sm border border-gray-300 rounded">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-2 border-b">Device</th>
                        <th className="text-left p-2 border-b">IP Address</th>
                        <th className="text-left p-2 border-b">Subnet Mask</th>
                        <th className="text-left p-2 border-b">Default Gateway</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Laptop0</td>
                        <td className="p-2">192.168.10.10</td>
                        <td className="p-2">255.255.255.0</td>
                        <td className="p-2">192.168.10.10</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Laptop1</td>
                        <td className="p-2">192.168.20.10</td>
                        <td className="p-2">255.255.255.0</td>
                        <td className="p-2">192.168.20.10</td>
                      </tr>
                      <tr>
                        <td className="p-2">WebServer</td>
                        <td className="p-2">192.168.10.20</td>
                        <td className="p-2">255.255.255.0</td>
                        <td className="p-2">192.168.10.20</td>
                      </tr>
                    </tbody>
                  </table>
                </StepItem>

                <StepItem title="Step 6: Test Ping Connectivity">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">🔹 Laptop0 → WebServer</h5>
                      <pre className="bg-gray-800 text-green-400 p-2 rounded">ping 192.168.10.20 → Successful</pre>
                      <img src="/images/4-baslik-steps6-foto1.png" alt="Laptop0 to WebServer ping" className="mt-2 max-w-full h-auto rounded border" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">🔹 Laptop1 → WebServer</h5>
                      <pre className="bg-gray-800 text-green-400 p-2 rounded">ping 192.168.10.20 → Successful</pre>
                      <img src="/images/4-baslik-steps6-foto2.png" alt="Laptop1 to WebServer ping" className="mt-2 max-w-full h-auto rounded border" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 mb-2">🔹 Laptop0 → Laptop1</h5>
                      <pre className="bg-gray-800 text-red-400 p-2 rounded">ping 192.168.20.10 → Request timed out</pre>
                      <img src="/images/4-baslik-steps6-foto3.png" alt="Laptop0 to Laptop1 ping failed" className="mt-2 max-w-full h-auto rounded border" />
                    </div>
                  </div>
                </StepItem>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-3">Resolution Summary:</h4>
                  <p className="text-blue-700 mb-3">
                    The network segmentation and inter-VLAN routing were not working correctly due to an IP address assigned on the router's physical interface (G0/0). This prevented ARP from resolving correctly across VLANs. Once the IP was removed from the physical interface and assigned to the subinterfaces instead, full routing and isolation were restored.
                  </p>
                  <p className="text-blue-700">
                    No ACL was needed — the VLAN-based segmentation combined with Router-on-a-Stick provided natural communication control:
                  </p>
                  <ul className="list-disc list-inside text-blue-700 mt-2">
                    <li>Both clients can access WebServer</li>
                    <li>Clients cannot communicate with each other</li>
                  </ul>
                </div>
                                                        <a
                        href="/downloads/InterVlan.pkt"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
                        download
                      >
                        📥 Download Packet Tracer File
                      </a>  
              </div>
            </div>. 
          </AccordionItem>

          {/* Issue 5 */}
          <AccordionItem title="Issue 5: Unauthorized DHCP Server (DHCP Spoofing)">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-800">Network Layer (Layer 3)</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Problem Description</h3>
                <p className="text-gray-700 mb-3">
                  A rogue (unauthorized) DHCP server has been introduced into the network. As a result, end-user devices began receiving incorrect IP configurations—such as wrong default gateway or DNS server settings. This can redirect traffic, cause network disruptions, or pose serious security threats.
                </p>
                <p className="text-gray-700">
                  Note: Without the rogue DHCP server, clients receive proper IP addresses (e.g., 192.168.1.14) and correct DNS server information (e.g., 172.168.1.4) from the legitimate DHCP server.
                </p>
                <div className="mt-3">
                  <img src="/images/5-baslik-description-foto1.png" alt="DHCP spoofing example" className="max-w-full h-auto rounded border" />
                  <img src="/images/5-baslik-description-foto2.png" alt="DHCP spoofing example" className="max-w-full h-auto rounded border" />
                </div>
                <p className="text-gray-700 mt-2">
                  But if there is no fake DHCP, the IP address would be like 192.168.1.14 and DNS Server is 172.168.1.4 like that on original DHCP and its configuration.
                </p>
                <img src="/images/5-baslik-description-foto3.png" alt="DHCP spoofing example" className="max-w-full h-auto rounded border" />
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Resolution Steps
                </h3>
                
                <StepItem title="Step 1: Temporarily Disable the Legitimate DHCP Server">
                  <p className="mb-2">Turn off the DHCP service on the real DHCP server located in the Data Center (Config DHCP Service: OFF).</p>
                  <img src="/images/5-baslik-steps1-foto1.png" alt="Disable DHCP service" className="max-w-full h-auto rounded border" />
                </StepItem>

                <StepItem title="Step 2: Renew DHCP Lease on Client Device" image="/images/5-baslik-steps2-foto1.png">
                  <p>Go to Laptop2 → Desktop → IP Configuration → Click on DHCP to renew the IP address.</p>
                  <p>→ Check if the client obtains an IP address from the fake DHCP server instead of getting an APIPA address (169.254.x.x).</p>
                </StepItem>

                <StepItem title="Step 3: Use Simulation Mode to Inspect DHCP OFFER Packet">
                  <p className="mb-2">Enable Packet Tracer's Simulation Mode.</p>
                  <p className="mb-2">From Laptop2, send a new DHCP Discover request.</p>
                  <p className="mb-2">→ Observe which device is sending the DHCP OFFER packet.</p>
                  <p>(This confirms the presence of the rogue DHCP server.)</p>
                  <img src="/images/5-baslik-steps3-foto1.png" alt="DHCP packet simulation" className="mt-2 max-w-full h-auto rounded border" />
                </StepItem>

                <StepItem title="Solution: Enable DHCP Snooping on the Switch">
                  <p className="mb-3">DHCP Snooping is a security feature that controls which switch ports are allowed to forward DHCP packets. It prevents rogue DHCP servers by filtering DHCP traffic on untrusted ports.</p>
                </StepItem>

                <StepItem title="Step 4: Activate DHCP Snooping">
                <img src="/images/5-baslik-steps4-foto1.png" alt="DHCP packet simulation" className="mt-2 max-w-full h-auto rounded border" />
                  <ul className="list-disc list-inside space-y-1">
                    <li>Enable DHCP Snooping on VLAN 1.</li>
                    <li>Mark the switch port connected to the legitimate DHCP server (e.g., FastEthernet0/1) as trusted.</li>
                    <li>All other client ports are considered untrusted, blocking DHCP offers from rogue servers.</li>
                  </ul>
                  <p className="mt-2"><i/>This setup ensures DHCP OFFER messages only come from trusted ports.</p>
                </StepItem>

                <StepItem title="Step 5: Retest DHCP Assignment" image="/images/5-baslik-steps5-foto1.png">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Turn the legitimate DHCP server back on.</li>
                    <li>Even if the fake DHCP server remains active, clients will no longer accept its IP offers.</li>
                    <li>On Laptop2, renew DHCP lease again.</li>
                    <li>→ Confirm that the IP address comes from the legitimate DHCP server.</li>
                  </ul>
                  <p className="mt-2">If clients fail to get an IP from the rogue server, they may temporarily fall back to APIPA until the real DHCP responds.</p>
                </StepItem>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-3">Resolution Summary:</h4>
                  <p className="text-blue-700">
                    An attacker introduced a rogue DHCP server trying to manipulate the network by handing out incorrect IP configurations. By enabling DHCP Snooping on the switch and designating only the real DHCP server's port as trusted, the rogue DHCP server's packets are blocked. This secures the network and ensures clients only receive valid IP information from the authorized DHCP server.
                  </p>
                </div>
                                                                        <a
                        href="/downloads/DHCP.pkt"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
                        download
                      >
                        📥 Download Packet Tracer File
                      </a> 
              </div>
            </div>
          </AccordionItem>

          {/* Issue 6 */}
          <AccordionItem title="Issue 6: Classful vs CIDR Subnetting – Legacy Device Conflict">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-800">Network Layer (Layer 3)</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Problem Description</h3>
                <p className="text-gray-700">
                  A legacy router was configured to use classful subnet assumptions, specifically assigning a 255.255.255.0 (Class C) subnet mask to an interface with a 192.168.x.x address, despite the network being designed with CIDR subnetting (/28). As a result, traffic from PC1 (192.168.40.18/28) to PC2 (192.168.40.173/28) could pass through the router, but the reverse direction failed due to mismatched subnet recognition.
                </p>
                <div className="mt-3">
                  <img src="/images/6-baslik-description-foto1.png" alt="Legacy device conflict" className="max-w-full h-auto rounded border" />
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Troubleshooting Steps
                </h3>
                
                <StepItem title="Step 1: Assign addresses and connect PCs via a router with two interfaces">
                  <ul className="list-disc list-inside space-y-1">
                    <li>PC1: 192.168.40.18 /28, GW: 192.168.40.17</li>
                    <li>PC2: 192.168.40.173 /28, GW: 192.168.40.161</li>
                    <li>Router interfaces:
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Gig0/0 → 192.168.40.17 255.255.255.240</li>
                        <li>Gig0/1 → 192.168.40.161 255.255.255.0 ← incorrect</li>
                      </ul>
                    </li>
                  </ul>
                </StepItem>

                <StepItem title="Step 2: Test reachability from PC1 → PC2">
                  <p>→ ping fails due to subnet conflict</p>
                </StepItem>

                <StepItem title="Step 3: Test reachability from PC2 → PC1">
                  <p>→ ping fails due to subnet conflict</p>
                  <img src="/images/6-baslik-steps3-foto1.png" alt="Legacy device conflict" className="max-w-full h-auto rounded border" />
                  <img src="/images/6-baslik-steps3-foto2.png" alt="Legacy device conflict" className="max-w-full h-auto rounded border" />
                  <img src="/images/6-baslik-steps3-foto3.png" alt="Legacy device conflict" className="max-w-full h-auto rounded border" />
                </StepItem>

                <StepItem title="Step 4: Fix the router interface mask">
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">{`Router(config)# interface g0/1
Router(config-if)# ip address 192.168.40.161 255.255.255.240`}</pre>
                </StepItem>

                <StepItem title="Step 5: Test bidirectional communication">
                  <p>→ ping successful from both sides</p>
                </StepItem>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-3">Resolution Summary:</h4>
                  <p className="text-blue-700">
                    The issue was caused by a legacy device defaulting to classful subnet assumptions (Class C), ignoring the CIDR /28 configuration. After correcting the subnet mask on the router interface, full bidirectional communication was restored between subnets.
                  </p>
                </div>
                                                                        <a
                        href="/downloads/CIDR.pkt"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
                        download
                      >
                        📥 Download Packet Tracer File
                      </a> 
              </div>
            </div>
          </AccordionItem>

          {/* Issue 7 */}
          <AccordionItem title="Issue 7: Missing NAT Configuration – Internet Access Failure in Campus Network">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-800">Network Layer (Layer 3)</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Problem Description</h3>
                <p className="text-gray-700 mb-3">
                  Although all devices in the campus network have correctly assigned IP addresses and default gateways, they are unable to access external servers (e.g., 8.8.8.8). While internal communication works properly, ping attempts to public IPs fail.
                </p>
                <p className="text-gray-700">
                  Upon inspection, it was discovered that the Campus_Router lacked proper NAT (Network Address Translation) configuration. Since private IP addresses (e.g., 192.168.10.11) were being sent to the public network without translation, they were not recognized by the upstream router (ISP) and were consequently dropped.
                </p>
                <div className="mt-3">
                  <img src="/images/7-baslik-description-foto1.png" alt="NAT configuration missing" className="max-w-full h-auto rounded border" />
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Troubleshooting Steps
                </h3>
                
                <StepItem title="✅ Step 1: Initial Ping Test" image="/images/7-baslik-steps1-foto1.png">
                  <p className="mb-2">From Student1_PC, the following command was executed:</p>
                  <pre className="bg-gray-800 text-green-400 p-2 rounded mb-2">ping 8.8.8.8</pre>
                  <p>→ The result was unsuccessful: Request timed out.</p>
                </StepItem>

                <StepItem title="✅ Step 2: NAT Translation Table Checked" image="/images/7-baslik-steps2-foto1.png">
                  <p className="mb-2">On Campus_Router, the following command was run:</p>
                  <pre className="bg-gray-800 text-green-400 p-2 rounded mb-2">show ip nat translations</pre>
                  <p>→ The NAT translation table was empty.</p>
                </StepItem>

                <StepItem title="✅ Step 3: NAT Configuration Verified">
                  <pre className="bg-gray-800 text-green-400 p-2 rounded mb-2">show run | section nat</pre>
                  <p>→ No NAT-related configuration was found.</p>
                </StepItem>

                <StepItem title="✅ Step 4: NAT Configuration Applied" image="/images/7-baslik-steps4-foto1.png">
                  <p className="mb-2">On Campus_Router, the following configuration commands were entered:</p>
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">{`configure terminal
access-list 1 permit 192.168.10.0 0.0.0.255
ip nat inside source list 1 interface gigabitEthernet 0/1 overload

interface gig0/0
ip nat inside
exit

interface gig0/1
ip nat outside
exit

end`}</pre>
                </StepItem>

                <StepItem title="✅ Step 5: Final Ping Test" image="/images/7-baslik-steps6-foto1.png">
                  <p className="mb-2">Again on Student1_PC:</p>
                  <pre className="bg-gray-800 text-green-400 p-2 rounded mb-2">ping 8.8.8.8</pre>
                  <p>→ The result was successful: replies received from the external server.</p>
                </StepItem>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-3">Resolution Summary:</h4>
                  <p className="text-blue-700">
                    The issue stemmed from a missing NAT configuration on the Campus_Router. Private IP addresses were being sent to the internet without translation and were thus rejected by external routers. After applying NAT overload using an access list and configuring inside/outside interfaces properly, internet access was successfully restored for all internal devices.
                  </p>
                </div>
                                                                        <a
                        href="/downloads/NAT2.pkt"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
                        download
                      >
                        📥 Download Packet Tracer File
                      </a> 
              </div>
            </div>
          </AccordionItem>

          {/* Issue 8 */}
          <AccordionItem title="Issue 8: DNS Conflict – Internal Device Blocking Public DNS Resolution">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-800">Application Layer (Layer 7)</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Problem Description</h3>
                <p className="text-gray-700 mb-3">
                  A device within the internal network was misconfigured with the public DNS server address `8.8.8.8`. This caused name resolution to fail across the entire campus network, as client devices unknowingly sent their DNS queries to the rogue internal device instead of the legitimate public DNS.
                </p>
                <p className="text-gray-700">
                  Even after correcting the DNS IP address on client devices to `8.8.4.4`, resolution failed because the DNS server service on the real DNS device was turned off. Therefore, multiple layers of misconfiguration led to failed name resolution.
                </p>
                <div className="mt-3">
                  <img src="/images/8-baslik-description-foto1.png" alt="DNS conflict" className="max-w-full h-auto rounded border" />
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Troubleshooting Steps
                </h3>
                
                <StepItem title="✅ Step 1: Check IP and DNS settings on Student_PC" image="/images/8-baslik-steps1-foto1.png">
                  <p>IP: `192.168.10.11`, Mask: `255.255.255.0`, Gateway: `192.168.10.1`, DNS: `8.8.4.4`</p>
                  <p>8.8.8.8 conflicts with internal rogue DNS, so 8.8.4.4 was chosen as a clean alternative.</p>
                </StepItem>

                <StepItem title="✅ Step 2: Ping test to DNS server" image="/images/8-baslik-steps2-foto1.png">
                  <pre className="bg-gray-800 text-green-400 p-2 rounded mb-2">ping 8.8.4.4</pre>
                  <p>→ Successful reply confirms Layer 3 connectivity.</p>
                </StepItem>

                <StepItem title="✅ Step 3: Attempt DNS resolution">
                  <pre className="bg-gray-800 text-green-400 p-2 rounded mb-2">nslookup google.com</pre>
                  <img src="/images/8-baslik-steps3-foto1.png" alt="DNS conflict" className="max-w-full h-auto rounded border" />
                  <p>→ Initially failed due to DNS service being off</p>
                </StepItem>

                <StepItem title="✅ Step 4: Verify and activate DNS service" image="/images/8-baslik-steps4-foto1.png">
                  <ul className="list-disc list-inside space-y-2">
                    <li>On the device configured as DNS Server (8.8.4.4):</li>
                    <li>Navigate to `Services {'>'}  DNS`</li>
                    <li>Toggle **Service ON**</li>
                    <li>Add DNS Record:</li>
                  </ul>
                  <table className="w-full text-sm border border-gray-300 rounded mt-3">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-2 border-b">Name</th>
                        <th className="text-left p-2 border-b">IP Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2">`google.com`</td>
                        <td className="p-2">`172.16.0.10`</td>
                      </tr>
                    </tbody>
                  </table>
                </StepItem>

                <StepItem title="✅ Step 5: Retest DNS resolution">
                  <pre className="bg-gray-800 text-green-400 p-2 rounded mb-2">nslookup google.com</pre>
                  <p>→ Successfully resolved</p>
                  <img src="/images/8-baslik-steps5-foto1.png" alt="DNS resolution success" className="mt-2 max-w-full h-auto rounded border" />
                </StepItem>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-3">Resolution Summary:</h4>
                  <p className="text-blue-700">
                    The issue originated from an IP conflict with a public DNS address used internally. Additionally, the DNS server was configured correctly in terms of IP but had its service turned off. Once the correct DNS address was set on the client and the service was enabled on the server, DNS resolution began functioning properly.
                  </p>
                </div>
                                                                        <a
                        href="/downloads/DNSConflict.pkt"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
                        download
                      >
                        📥 Download Packet Tracer File
                      </a> 
              </div>
            </div>
          </AccordionItem>

          {/* Issue 9 */}
          <AccordionItem title="Issue 9: Access Control List (ACL) Misconfiguration – Unintended External Access">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-800">Network Layer (Layer 3)</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Problem Description</h3>
                <p className="text-gray-700">
                  A critical web server hosted inside the network was unintentionally exposed to external access due to a missing Access Control List (ACL) on the Campus_Router. The server was reachable from the Internet_Router, which violated the security policy that mandated internal-only access.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Troubleshooting Steps
                </h3>
                
                <StepItem title="Step 1: Configure network topology">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Internet_Router: 200.0.0.1/30</li>
                    <li>Campus_Router g0/0: 200.0.0.2/30 (WAN)</li>
                    <li>Campus_Router g0/1: 192.168.10.1/24 (LAN)</li>
                    <li>Web_Server: 192.168.10.100</li>
                    <li>Internal_PC: 192.168.10.10</li>
                  </ul>
                </StepItem>

                <StepItem title="Step 2: Test connectivity">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Internal_PC → Web_Server → Success</li>
                    <li>Internet_Router → Web_Server → ❌ Unexpected Success</li>
                  </ul>
                  <div className="mt-3 space-y-2">
                    <img src="/images/9-baslik-steps2-foto1.png" alt="Network connectivity test 1" className="max-w-full h-auto rounded border" />
                    <img src="/images/9-baslik-steps2-foto2.png" alt="Network connectivity test 2" className="max-w-full h-auto rounded border" />
                  </div>
                </StepItem>

                <StepItem title="Step 3: Configure ACL on Campus_Router" image="/images/9-baslik-steps3-foto1.png">
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">{`access-list 100 permit ip 192.168.10.0 0.0.0.255 any
access-list 100 deny ip any 192.168.10.100 0.0.0.0
interface g0/0
ip access-group 100 in`}</pre>
                </StepItem>

                <StepItem title="✅ Step 4: Retest connectivity">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Internet_Router → Web_Server → ❌ Now blocked</li>
                    <li>Internal_PC → Web_Server → ✅ Still successful</li>
                  </ul>
                  <div className="mt-3 space-y-2">
                    <img src="/images/9-baslik-steps4-foto1.png" alt="ACL blocking external access" className="max-w-full h-auto rounded border" />
                    <img src="/images/9-baslik-steps4-foto2.png" alt="Internal access still working" className="max-w-full h-auto rounded border" />
                  </div>
                </StepItem>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-3">Resolution Summary:</h4>
                  <p className="text-blue-700">
                    The issue stemmed from the absence of an inbound access control list (ACL) on the external-facing interface of the Campus_Router. After deploying ACL 100 to allow internal traffic while denying external access to the web server, proper segmentation and access restrictions were restored.
                  </p>
                </div>
                                                                        <a
                        href="/downloads/ACL.pkt"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
                        download
                      >
                        📥 Download Packet Tracer File
                      </a> 
              </div>
            </div>
          </AccordionItem>

          {/* Issue 10 */}
          <AccordionItem title="Issue 10: Port Security Violation – Rogue Device Access">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-800">Data Link Layer (Layer 2)</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Problem Description</h3>
                <p className="text-gray-700 mb-3">
                  In this scenario, an unauthorized (rogue) device was able to connect to the switch and gain access to the internal network by physically connecting to an unused port. This is a critical security risk that can lead to data theft, unauthorized network access, and device impersonation.
                </p>
                <p className="text-gray-700">
                  The objective is to prevent unknown MAC addresses from accessing the network by enforcing port security on the switch, thereby allowing only authorized devices to use a particular port.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Troubleshooting & Attack Simulation Steps
                </h3>
                
                <StepItem title="Step 1: Normal Working State (Before Security Configuration)">
                  <ul className="list-disc list-inside space-y-1">
                    <li>PC was connected to Switch0 via FastEthernet0/1.</li>
                    <li>Laptop was connected via FastEthernet0/2.</li>
                    <li>PC and Laptop could successfully ping each other.</li>
                    <li>No port-security configured yet.</li>
                  </ul>
                  <div className="mt-3 space-y-2">
                    <img src="/images/10-baslik-steps1-foto1.png" alt="Normal network state" className="max-w-full h-auto rounded border" />
                    <img src="/images/10-baslik-steps1-foto2.png" alt="Ping test success" className="max-w-full h-auto rounded border" />
                    <img src="/images/10-baslik-steps1-foto3.png" alt="Ping test success" className="max-w-full h-auto rounded border" />
                  </div>
                </StepItem>

                <StepItem title="Step 2: Port Security Applied to Fa0/1 (PC)">
                  <p className="mb-2">Switch0 {'>'}  CLI:</p>
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">{`interface FastEthernet0/1
switchport mode access
switchport port-security
switchport port-security maximum 1
switchport port-security mac-address sticky
switchport port-security violation shutdown`}</pre>
                  <p className="mt-2">→ This ensures only one MAC (PC) can connect to Fa0/1.</p>
                </StepItem>

                <StepItem title="Step 3: Violation Test – Rogue Device Attempt">
                  <ul className="list-disc list-inside space-y-1">
                    <li>PC was unplugged from Fa0/1.</li>
                    <li>Laptop was connected to the same port (Fa0/1).</li>
                    <li>Laptop tried to ping → failed.</li>
                    <li>The port was automatically disabled due to MAC address mismatch (violation detected).</li>
                  </ul>
                  <div className="mt-3 space-y-2">
                    <img src="/images/10-baslik-steps3-foto1.png" alt="Port security violation" className="max-w-full h-auto rounded border" />
                    <img src="/images/10-baslik-steps3-foto2.png" alt="Port disabled" className="max-w-full h-auto rounded border" />
                  </div>
                </StepItem>

                <StepItem title="Step 4: Recovery">
                  <ul className="list-disc list-inside space-y-1 mb-2">
                    <li>Switch CLI used to shut and no shut the disabled port.</li>
                  </ul>
                  <p className="mb-2">Switch0 {'>'}  CLI:</p>
                  <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto mb-2">{`interface FastEthernet0/1
shutdown
no shutdown`}</pre>
                  <ul className="list-disc list-inside space-y-1">
                    <li>PC0 was reconnected.</li>
                    <li>Port returned to secure-up status.</li>
                  </ul>
                  <img src="/images/10-baslik-steps4-foto1.png" alt="Port disabled" className="max-w-full h-auto rounded border" />
                  <p className="mt-2">show port-security interface Fa0/1 → secure-up, 1 MAC learned</p>
                </StepItem>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-3">Resolution Summary:</h4>
                  <p className="text-blue-700">
                    A rogue device connected to a secured port triggered a violation, and the port was disabled to prevent unauthorized access. By enforcing port-security with sticky MAC and configuring violation mode as shutdown, unauthorized access was effectively prevented. After re-enabling the port and reconnecting the trusted device, normal operation resumed.
                  </p>
                </div>
                                                                        <a
                        href="/downloads/PortSecurity.pkt"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
                        download
                      >
                        📥 Download Packet Tracer File
                      </a> 
              </div>
            </div>
          </AccordionItem>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Network Troubleshooting Admin Guide - Computer Networks Course Project
          </p>
          <p className="text-gray-500 mt-2">
            Created by Berra SÖYLER
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
